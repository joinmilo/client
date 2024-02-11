import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { FilterSortPaginateInput, RoleEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsRoleActions } from '../../state/admin-settings-role.actions';
import { selectRoles } from '../../state/admin-settings-role.selectors';

@Component({
  selector: 'app-admin-settings-role-overview',
  templateUrl: './admin-settings-role-overview.component.html',
  styleUrls: ['./admin-settings-role-overview.component.scss'],
})
export class AdminSettingsRoleOverviewComponent {

  public roles = this.store.select(selectRoles);

  public actions: RowAction<RoleEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'form'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: user =>
        this.store.dispatch(AdminSettingsRoleActions.deleteRole(user)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<RoleEntity>[] = [
    {
      field: 'name',
      label: 'name',
    },
    {
      field: 'privileges',
      label: 'rights',
      value: row => row.privileges?.map(p => p?.code).join(', '),
    },
    {
      field: 'users',
      label: 'users',
      type: 'LIST',
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
