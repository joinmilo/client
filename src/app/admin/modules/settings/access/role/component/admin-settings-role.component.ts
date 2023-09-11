import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput, RoleEntity } from 'src/app/core/api/generated/schema';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { AdminSettingsRoleActions } from '../state/admin-settings-role.actions';
import { selectRoles } from '../state/admin-settings-role.selectors';

@Component({
  selector: 'app-admin-settings-role',
  templateUrl: './admin-settings-role.component.html',
  styleUrls: ['./admin-settings-role.component.scss'],
})
export class AdminSettingsRoleComponent {

  public roles = this.store.select(selectRoles);

  public actions: RowAction<RoleEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'edit'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: user =>
        this.store.dispatch(AdminSettingsRoleActions.deleteRole(user)),
      tooltipLabel: 'delete'
    },

    'SHARE',
  ];

  public columns: Column<RoleEntity>[] = [
    {
      field: 'name',
      label: 'name',
    },
    {
      field: 'code',
      label: 'code'
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsRoleActions.updateParams(params));
  }
}
