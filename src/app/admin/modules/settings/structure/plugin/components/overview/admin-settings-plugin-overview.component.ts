import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput, PluginEntity } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { AdminSettingsPluginActions } from '../../state/admin-settings-plugin.actions';
import { selectPlugins } from '../../state/admin-settings-plugin.selectors';
import { AdminSettingsPluginMenuAssignComponent } from '../menu-assign/admin-settings-plugin-menu-assign.component';

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
        plugin?.active 
        ? this.store.dispatch(AdminSettingsPluginActions.deactivatePlugin(plugin)) 
        : this.dialog.open(AdminSettingsPluginMenuAssignComponent, {
          data: plugin 
        }),
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
    private dialog: MatDialog,
    private translationService: TranslationService
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsPluginActions.updateParams(params));
  }
}
