import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { combineLatest, map } from 'rxjs';
import { FilterSortPaginateInput, UserEntity } from 'src/app/core/api/generated/schema';
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
      icon: 'trash',
      callback: user =>
        this.store.dispatch(AdminSettingsUserActions.deleteUser(user)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<UserEntity>[] = [
    {
      field: 'firstName',
      label: 'firstName',
      sort: true
    },
    {
      field: 'lastName',
      label: 'lastName',
      sort: true
    },
    {
      field: 'email',
      label: 'email',
      sort: true
    },
    {
      field: 'phone',
      label: 'phone',
      sort: true
    },
    {
      field: 'lastLogin',
      label: 'lastLogin',
      sort: true
    },
    {
      field: 'verified',
      label: 'verified',
      type: 'BOOLEAN',
      sort: true
    },
    {
      field: 'roles',
      label: 'roles',
      value: row => row.roles?.length
        ? combineLatest(
            row.roles?.map(r => this.translationService.translatable(r, 'name'))
          ).pipe(map(result => result.join(', ')))
        : null
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsUserActions.updateParams(params));
  }
}
