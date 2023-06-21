import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectEventDetails } from 'src/app/portal/features/event/details/state/portal-event-details.selectors';
import { EventRatingEntity, Maybe } from 'src/schema/schema';

@Component({
  selector: 'app-star-evaluation',
  templateUrl: './star-evaluation.component.html',
  styleUrls: ['./star-evaluation.component.scss'],
})
export class StarEvaluationComponent implements OnInit, OnDestroy {


  public ratings?: Maybe<Maybe<EventRatingEntity>[]> | undefined;

  private destroy = new Subject<void>();

  public ratingResult = [
    { star: 5, percentage: 0 },
    { star: 4, percentage: 0 },
    { star: 3, percentage: 0 },
    { star: 2, percentage: 0 },
    { star: 1, percentage: 0 },
  ];

  constructor(private store: Store, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.store
      .select(selectEventDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe(event => {
        this.ratings = event?.ratings,
          this.calculatePercentage();
      });
  }

  calculatePercentage() {
    if (this.ratings && this.ratings.length > 0) {

      this.ratingResult.forEach(result => {
        const starRatingCount = this.ratings?.filter(item => item?.score === result.star).length;
        result.percentage = ((starRatingCount ?? 0) / (this.ratings?.length ?? 0)) * 100;
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}


