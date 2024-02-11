import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { FilterSortPaginateInput, PluginEntity } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { AdminSettingsPluginActions } from '../state/admin-settings-plugin.actions';
import { selectPlugins } from '../state/admin-settings-plugin.selectors';

@Component({
  selector: 'app-admin-settings-plugin',
  templateUrl: './admin-settings-plugin.component.html',
  styleUrls: ['./admin-settings-plugin.component.scss'],
})
export class AdminSettingsPluginComponent {

  public features = this.store.select(selectPlugins);

  public actions: RowAction<PluginEntity>[] = [
    {
      icon: 'toggle-off',
      callback: feature =>
        this.store.dispatch(AdminSettingsPluginActions.togglePlugin(feature)),
      disable: (row) => !row?.released,
      tooltipLabel: 'toggleActivatePlugin',
    },
  ];

  public columns: Column<PluginEntity>[] = [
    {
      field: 'translatables.name',
      label: 'plugins',
      value: row => this.translationService.translatable(row.translatables, 'name'),
    },
    {
      field: 'released',
      label: 'released',
      value: row => this.translationService.label(row.released ? 'yes' : 'comingSoon'),
      sort: true
    },
    {
      field: 'active',
      label: 'active',
      type: 'BOOLEAN',
      sort: true
    },
  ];

  constructor(
    private store: Store,
    private translationService: TranslationService
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsPluginActions.updateParams(params));
  }
}
