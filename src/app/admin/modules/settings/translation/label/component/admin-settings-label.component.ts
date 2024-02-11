import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { FilterSortPaginateInput, LabelEntity } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { AdminSettingsLabelActions } from '../state/admin-settings-label.actions';
import { selectLabels } from '../state/admin-settings-label.selectors';

@Component({
  selector: 'app-admin-settings-label',
  templateUrl: './admin-settings-label.component.html',
  styleUrls: ['./admin-settings-label.component.scss'],
})
export class AdminSettingsLabelComponent {

  public labels = this.store.select(selectLabels);

  public actions: RowAction<LabelEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row => this.store.dispatch(AdminSettingsLabelActions.saveLabel(row)),
      tooltipLabel: 'edit',
      inlineEdit: true
    },
  ];

  public columns: Column<LabelEntity>[] = [
    {
      field: 'tagId',
      label: 'identifier',
      sort: true
    },
    {
      field: 'content',
      label: 'content',
      value: (row) => this.translationService.translatable(row.translatables, 'content'),
      editable: true,
    },
  ];

  constructor(
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsLabelActions.updateParams(params));
  }
}
