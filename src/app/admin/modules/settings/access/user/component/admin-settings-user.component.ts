import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput, UserEntity } from 'src/app/core/api/generated/schema';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { AdminSettingsUserActions } from '../state/admin-settings-user.actions';
import { selectUsers } from '../state/admin-settings-user.selectors';

@Component({
  selector: 'app-admin-settings-user',
  templateUrl: './admin-settings-user.component.html',
  styleUrls: ['./admin-settings-user.component.scss'],
})
export class AdminSettingsUserComponent {

  public users = this.store.select(selectUsers);

  public actions: RowAction<UserEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'edit'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: user =>
        this.store.dispatch(AdminSettingsUserActions.deleteUser(user)),
      tooltipLabel: 'delete'
    },

    'SHARE',
  ];

  public columns: Column<UserEntity>[] = [
    {
      field: 'firstName',
      label: 'firstName',
    },
    {
      field: 'lastName',
      label: 'lastName'
    },
    {
      field: 'email',
      label: 'email',
    },
    {
      field: 'phone',
      label: 'phone',
    },
    {
      field: 'lastLogin',
      label: 'lastLogin',
    },
    {
      field: 'verified',
      label: 'verified',
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsUserActions.updateParams(params));
  }
}
