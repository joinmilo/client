import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { MediaAdminOverviewActions } from '../state/media-admin-overview.actions';
import { selectOverviewData } from '../state/media-admin-overview.selectors';

@Component({
  selector: 'app-media-admin-overview',
  templateUrl: './media-admin-overview.component.html',
  styleUrls: ['./media-admin-overview.component.scss']
})
export class MediaAdminOverviewComponent {

  public infoMedia = this.store.select(selectOverviewData);

  constructor(
    private store: Store,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(MediaAdminOverviewActions.updateParams(params));
  }
}
