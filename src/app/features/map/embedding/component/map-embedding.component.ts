import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, combineLatest, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { MarkerDefinition } from 'src/app/shared/widgets/map/typings/map';
import { MapEmbeddingActions } from '../state/map-embedding.actions';
import { selectSponsoredDeal, selectSponsoredEvent, selectSponsoredOrganisation } from '../state/map-embedding.selectors';

@Component({
  selector: 'app-map-embedding',
  templateUrl: './map-embedding.component.html',
  styleUrls: ['./map-embedding.component.scss']
})
export class MapEmbeddingComponent implements OnDestroy {
  
  public markers?: Maybe<MarkerDefinition[]>;

  private destroy = new Subject<void>();

  constructor(
    private store: Store, 
  ) {
    this.store.dispatch(MapEmbeddingActions.getSponsoredDeal());
    this.store.dispatch(MapEmbeddingActions.getSponsoredEvent());
    this.store.dispatch(MapEmbeddingActions.getSponsoredOrganisation());

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
