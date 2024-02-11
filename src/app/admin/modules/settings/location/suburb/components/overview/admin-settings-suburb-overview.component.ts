import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { FilterSortPaginateInput, SuburbEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsSuburbActions } from '../../state/admin-settings-suburb.actions';
import { selectSuburbs } from '../../state/admin-settings-suburb.selectors';

@Component({
  selector: 'app-admin-settings-suburb-overview',
  templateUrl: './admin-settings-suburb-overview.component.html',
  styleUrls: ['./admin-settings-suburb-overview.component.scss'],
})
export class AdminSettingsSuburbOverviewComponent {

  public suburbs = this.store.select(selectSuburbs)

  public actions: RowAction<SuburbEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate(['form', row?.id], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: suburb =>
        this.store.dispatch(AdminSettingsSuburbActions.delete(suburb)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<SuburbEntity>[] = [
    {
      field: 'name',
      label: 'name',
    },
    {
      field: 'latitude',
      label: 'latitude'
    },
    {
      field: 'longitude',
      label: 'longitude',
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsSuburbActions.updateParams(params));
  }
}
