import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { slug } from 'src/app/core/constants/core.constants';
import { EventEntity, Maybe, MediaEntity } from 'src/schema/schema';
import { PortalEventDetailsActions } from '../state/portal-event-details.actions';
import { selectEventDetails } from '../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-details',
  templateUrl: './portal-event-details.component.html',
  styleUrls: ['./portal-event-details.component.scss']
})
export class PortalEventDetailsComponent implements OnInit, OnDestroy {

  public event?: Maybe<EventEntity>;

  public titleImage?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      tap(params => this.store.dispatch(PortalEventDetailsActions.getDetails(params.get(slug) || ''))),
      switchMap(() => this.store.select(selectEventDetails)),
      takeUntil(this.destroy)
    ).subscribe(event => {
      this.event = event;
      this.titleImage = event?.uploads?.find(upload => upload?.title)?.media;
      this.media = event?.uploads
        ?.filter(upload => !upload?.card && !upload?.title)
        ?.map(eventMedia => eventMedia?.media) as MediaEntity[];
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}