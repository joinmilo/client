import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { EventEntity, Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { eventsFeatureKey } from 'src/app/core/constants/feature.constants';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { EventFilterQueryDefinition } from 'src/app/core/typings/filter-params/event-filter-param';
import { MarkerDefinition } from 'src/app/shared/widgets/map/typings/map';
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

  public mediaTitle?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  private destroy = new Subject<void>();

  public marker?: Maybe<MarkerDefinition>;

  public portalUrl = portalUrl;

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
      this.mediaTitle = event?.uploads?.find(upload => upload?.title)?.media;

      this.marker = {
        entity: 'EventEntity',
        data: [event]
      };

      this.media = event?.uploads
        ?.filter(upload => !upload?.card && !upload?.title)
        ?.map(eventMedia => eventMedia?.media)
        ?.slice(0, 10) as MediaEntity[];
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
