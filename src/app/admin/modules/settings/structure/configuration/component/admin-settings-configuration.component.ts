import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { ConfigurationEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { AdminSettingsConfiguratioActions } from '../state/admin-settings-configuration.actions';
import { selectConfigurations } from '../state/admin-settings-configuration.selectors';

@Component({
  selector: 'app-admin-settings-configuration',
  templateUrl: './admin-settings-configuration.component.html',
  styleUrls: ['./admin-settings-configuration.component.scss'],
})
export class AdminSettingsConfigurationComponent {

  public configurations = this.store.select(selectConfigurations);

  public actions: RowAction<ConfigurationEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row => this.store.dispatch(AdminSettingsConfiguratioActions.saveConfiguration(row)),
      disable: row => !!row?.media,
      tooltipLabel: 'edit',
      inlineEdit: true
    },
  ];

  public columns: Column<ConfigurationEntity>[] = [
    {
      field: 'code',
      label: 'identifier',
      sort: true
    },
    {
      field: 'value',
      label: 'value',
      editable: true,
      sort: true
    },

    {
      field: 'media',
      label: 'file',
      editable: true,
      type: 'MEDIA',
    },
  ];

  constructor(
    private store: Store,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsConfiguratioActions.updateParams(params));
  }
}
