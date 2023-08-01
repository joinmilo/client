import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { eventsFeatureKey, slug } from 'src/app/core/constants/core.constants';
import { EventFilterQueryDefinition } from 'src/app/core/typings/filter-params/event-filter-param';
import { MarkerDefinition } from 'src/app/shared/map/typings/map';
import { EventEntity, Maybe, MediaEntity } from 'src/schema/schema';
import { PortalEventDetailsActions } from '../state/portal-event-details.actions';
import { selectEventDetails } from '../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-details',
  templateUrl: './portal-event-details.component.html',
  styleUrls: ['./portal-event-details.component.scss']
})
export class PortalEventDetailsComponent implements OnInit, OnDestroy {

  public categoryUrl = eventsFeatureKey;

  public categoryQueryParams = EventFilterQueryDefinition.eventCategories;

  public event?: Maybe<EventEntity>;

  public titleImage?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  private destroy = new Subject<void>();

  public marker?: Maybe<MarkerDefinition>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(PortalEventDetailsActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectEventDetails)),
      takeUntil(this.destroy)
    ).subscribe(event => {
      this.event = event;
      this.titleImage = event?.uploads?.find(upload => upload?.title)?.media;
      
      this.marker = {
        entity: 'EventEntity',
        data: [event]
      };

      this.media = event?.uploads
        ?.filter(upload => !upload?.card && !upload?.title)
        ?.map(eventMedia => eventMedia?.media)
        ?.slice(0, 5) as MediaEntity[];
    });

  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}