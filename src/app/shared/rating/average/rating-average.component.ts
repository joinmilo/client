import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { slug } from 'src/app/core/constants/core.constants';
import { PortalEventDetailsActions } from 'src/app/portal/features/event/details/state/portal-event-details.actions';
import { selectEventDetails } from 'src/app/portal/features/event/details/state/portal-event-details.selectors';
import { EventRatingEntity, Maybe } from 'src/schema/schema';
import { selectEventRating } from '../state/rating.selectors';

@Component({
  selector: 'app-rating-average',
  templateUrl: './rating-average.component.html',
  styleUrls: ['./rating-average.component.scss'],
})
export class RatingAverageComponent implements OnInit, OnDestroy {

  public averageRating = 0;

  public ratings?: Maybe<Maybe<EventRatingEntity>[]> | undefined

  private destroy = new Subject<void>();

  constructor(private store: Store, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.store
      .select(selectEventDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe(event => {
        this.ratings = event?.ratings;
        this.calculateAverage();
      });

    this.store
      .select(selectEventRating)
      .pipe(takeUntil(this.destroy))
      .subscribe(action => {
        if (action) {
          this.fetchDetailsAndCommentsAndUpdate();
        }
      });
  }

  fetchDetailsAndCommentsAndUpdate() {
    this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        const eventParam = params.get(slug) || '';
        this.store.dispatch(PortalEventDetailsActions.getDetails(eventParam));
        this.store.dispatch(PortalEventDetailsActions.getComments(eventParam));
        return this.store.select(selectEventDetails);
      }),
      takeUntil(this.destroy)
    ).subscribe(event => {
      this.ratings = event?.ratings;
      this.calculateAverage()
    });
  }

  calculateAverage() {
    if (this.ratings && this.ratings.length > 0) {
      this.averageRating = this.ratings.reduce(
        (accumulator, current) => accumulator + (current?.score ?? 0),
        0
      ) / this.ratings.length;
    }
  }

  showIcon(index: number): IconProp {
    const rating = Math.floor(this.averageRating);
    if (rating >= index + 1) {
      return ['fas', 'star'];
    } else if (this.averageRating >= index + 0.5) {
      return ['fas', 'star-half-alt'];
    } else {
      return ['far', 'star'];
    }
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
