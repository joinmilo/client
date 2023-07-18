import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, combineLatest, takeUntil } from 'rxjs';
import { MarkerDefinition } from 'src/app/shared/map/typings/map';
import { MapPageFeatureActions } from '../state/map-page-feature.actions';
import { selectSponsoredDeal, selectSponsoredEvent, selectSponsoredOrganisation } from '../state/map-page-feature.selectors';

@Component({
  selector: 'app-map-page-feature',
  templateUrl: './map-page-feature.component.html',
  styleUrls: ['./map-page-feature.component.scss']
})
export class MapPageFeatureComponent implements OnDestroy {
  
  public markers?: Maybe<MarkerDefinition[]>;

  private destroy = new Subject<void>();

  constructor(
    private store: Store, 
  ) {
    this.store.dispatch(MapPageFeatureActions.getSponsoredDeal());
    this.store.dispatch(MapPageFeatureActions.getSponsoredEvent());
    this.store.dispatch(MapPageFeatureActions.getSponsoredOrganisation());

    combineLatest([
      this.store.select(selectSponsoredEvent),
      this.store.select(selectSponsoredOrganisation),
      this.store.select(selectSponsoredDeal)
    ]).pipe(takeUntil(this.destroy))
      .subscribe(([event, organisation, deal]) => this.markers = [
        {
          entity: 'EventEntity',
          data: [event]
        },
        {
          entity: 'DealEntity',
          data: [deal]
        },
        {
          entity: 'OrganisationEntity',
          data: [organisation]
        }
      ]);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
