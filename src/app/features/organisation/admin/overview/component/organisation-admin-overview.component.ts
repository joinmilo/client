import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { FilterSortPaginateInput, OrganisationEntity } from 'src/schema/schema';
import { selectOverviewData } from '../state/organisation-portal-overview.selectors';
import { OrganisationAdminOverviewActions } from '../state/organisation-admin-overview.actions';

@Component({
  selector: 'app-organisation-admin-overview',
  templateUrl: './organisation-admin-overview.component.html',
  styleUrls: ['./organisation-admin-overview.component.scss']
})
export class OrganisationAdminOverviewComponent {

  public organisations = this.store.select(selectOverviewData);

  public actions: RowAction<OrganisationEntity>[] = [
    { type: 'LIKE' },
    { type: 'SHARE' }
  ];

  public columns: Column<OrganisationEntity>[] = [
    {
      field: 'name',
      label: 'name',
      sort: true,
    },
    {
      field: 'contact.email',
      label: 'email',
      sort: true,
    },
    {
      field: 'visitors.visits',
      label: 'visiting',
      type: row => `${row.visitors?.reduce((sum, visitor) => sum + visitor!['visits']!, 0)}`
    },
  ];

  constructor(
    private store: Store
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(OrganisationAdminOverviewActions.updateParams(params));
  }
}
