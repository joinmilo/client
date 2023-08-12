import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PortalMediaOverviewActions } from '../state/portal-media-overview.actions';
import { selectOverviewData } from '../state/portal-media-overview.selectors';
import { FilterSortPaginateInput } from 'src/schema/schema';

@Component({
  selector: 'app-portal-media-overview',
  templateUrl: './portal-media-overview.component.html',
  styleUrls: ['./portal-media-overview.component.scss']
})
export class PortalMediaOverviewComponent {

  public infoMedia = this.store.select(selectOverviewData);

  constructor(
    private store: Store,
  ) {
    this.store.dispatch(PortalMediaOverviewActions.getOverviewMedia());
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(PortalMediaOverviewActions.updateParams(params));
  }
}
