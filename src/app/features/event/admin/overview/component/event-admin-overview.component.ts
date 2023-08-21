import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { EventEntity, FilterSortPaginateInput } from 'src/schema/schema';
import { selectOverviewData } from '../state/event-portal-overview.selectors';
import { EventAdminOverviewActions } from '../state/event-admin-overview.actions';

@Component({
  selector: 'app-event-admin-overview',
  templateUrl: './event-admin-overview.component.html',
  styleUrls: ['./event-admin-overview.component.scss']
})
export class EventAdminOverviewComponent {

  public events = this.store.select(selectOverviewData);

  public actions: RowAction<EventEntity>[] = [
    { type: 'LIKE' },
    { type: 'SHARE' }
  ];

  public columns: Column<EventEntity>[] = [
    {
      field: 'translatables.name',
      label: 'activities',
      type: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'visitors.visits',
      label: 'visiting',
      type: row => `${row.visitors?.reduce((sum, visitor) => sum + visitor!['visits']!, 0)}`
    },
    {
      field: 'modified',
      label: 'date',
      type: 'DATETIME',
      sort: true,
    },
    {
      field: 'category',
      label: 'category',
      type: 'CATEGORY',
    },
  ];

  constructor(
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(EventAdminOverviewActions.updateParams(params));
  }
}
