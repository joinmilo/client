import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { FilterSortPaginateInput, PluginEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPluginOverviewActions } from '../state/admin-settings-plugin-overview.actions';
import { selectPlugins } from '../state/admin-settings-plugin-overview.selectors';

@Component({
  selector: 'app-admin-settings-plugin-overview',
  templateUrl: './admin-settings-plugin-overview.component.html',
  styleUrls: ['./admin-settings-plugin-overview.component.scss'],
})
export class AdminSettingsPluginOverviewComponent {

  public plugins = this.store.select(selectPlugins);

  public actions: RowAction<PluginEntity>[] = [
    {
      icon: 'toggle-off',
      callback: plugin =>
        this.store.dispatch(AdminSettingsPluginOverviewActions.togglePlugin(plugin)),
      tooltipLabel: 'toggleActivatePlugin',
    },
    {
      icon: 'folder-tree',
      callback: row => 
        this.router.navigate(['admin/settings/structure/plugins', row?.code, 'form']),
      disable: (row) => !row?.active,
      tooltipLabel: 'changeMenuPoint',
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
      value: row => this.translationService.getLabel(row.released ? 'yes' : 'comingSoon'),
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
    private router: Router,
    private translationService: TranslationService
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsPluginOverviewActions.updateParams(params));
  }

}
