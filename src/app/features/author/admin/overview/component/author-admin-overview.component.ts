import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput, UserContextEntity } from 'src/app/core/api/generated/schema';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { AuthorAdminOverviewActions } from '../state/author-admin-overview.actions';
import { selectOverviewData } from '../state/author-admin-overview.selectors';

@Component({
  selector: 'app-author-admin-overview',
  templateUrl: './author-admin-overview.component.html',
  styleUrls: ['./author-admin-overview.component.scss']
})
export class AuthorAdminOverviewComponent {

  public authors = this.store.select(selectOverviewData);

  public actions: RowAction<UserContextEntity>[] = [
    'SHARE',
  ];

  public columns: Column<UserContextEntity>[] = [
    {
      field: 'user.firstName',
      label: 'firstName',
    },
    {
      field: 'user.lastName',
      label: 'lastName',
    },
    {
      field: 'user.email',
      label: 'email',
    },
    {
      field: 'articles',
      label: 'articles',
      type: 'LIST'
    },
    {
      field: 'user.lastLogin',
      label: 'lastLogin',
      type: 'DATETIME',
      sort: true,
    },
  ];

  constructor(
    private store: Store,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AuthorAdminOverviewActions.updateParams(params));
  }

}
