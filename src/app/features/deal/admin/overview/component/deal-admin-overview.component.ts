import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { selectOverviewData } from '../state/survey-portal-overview.selectors';
import { DealEntity, FilterSortPaginateInput } from 'src/schema/schema';
import { DealAdminOverviewActions } from '../state/survey-admin-overview.actions';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-deal-admin-overview',
  templateUrl: './deal-admin-overview.component.html',
  styleUrls: ['./deal-admin-overview.component.scss']
})
export class DealAdminOverviewComponent {

  public deals = this.store.select(selectOverviewData);

  public actions: RowAction<DealEntity>[] = [
    { type: 'LIKE' },
    { type: 'SHARE' }
  ];

  public columns: Column<DealEntity>[] = [
    {
      field: 'translatables.name',
      label: 'deals',
      type: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'visitors.visits',
      label: 'visiting',
      type: row => `${row.visitors?.reduce((sum, visitor) => sum + visitor!['visits']!, 0) ?? 0}`
    },
    {
      field: 'category',
      label: 'category',
      type: 'CATEGORY',
    },
  ];

  constructor(
    private store: Store,
    private translationService: TranslationService
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(DealAdminOverviewActions.updateParams(params));
  }
}
