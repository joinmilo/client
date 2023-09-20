import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeatureEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { AdminSettingsFeatureActions } from '../state/admin-settings-feature.actions';
import { selectFeatures } from '../state/admin-settings-feature.selectors';

@Component({
  selector: 'app-admin-settings-feature',
  templateUrl: './admin-settings-feature.component.html',
  styleUrls: ['./admin-settings-feature.component.scss'],
})
export class AdminSettingsFeatureComponent {

  public features = this.store.select(selectFeatures);

  public actions: RowAction<FeatureEntity>[] = [
    {
      icon: 'toggle-off',
      callback: feature =>
        this.store.dispatch(AdminSettingsFeatureActions.toggleFeature(feature)),
      tooltipLabel: 'toggleActivatePlugin',
    },
  ];

  public columns: Column<FeatureEntity>[] = [
    {
      field: 'translatables.name',
      label: 'plugins',
      type: row => this.translationService.translatable(row.translatables, 'name'),
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
    this.store.dispatch(AdminSettingsFeatureActions.updateParams(params));
  }
}
