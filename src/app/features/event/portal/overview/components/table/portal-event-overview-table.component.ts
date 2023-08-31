import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { EventEntity } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowDefaultAction, SortPaginate } from 'src/app/shared/widgets/table/typings/table';
import { selectOverviewData } from '../../state/portal-event-overview.selectors';

@Component({
  selector: 'app-portal-event-overview-table',
  templateUrl: './portal-event-overview-table.component.html',
  styleUrls: ['./portal-event-overview-table.component.scss']
})
export class PortalEventOverviewTableComponent {

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public events = this.store.select(selectOverviewData);

  public actions: RowDefaultAction[] = [
    'LIKE', 'SHARE'
  ];

  public columns: Column<EventEntity>[] = [
    {
      field: 'translatables.name',
      label: 'title',
      type: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'contact.name',
      label: 'organizer',
      sort: true,
    },
    {
      field: 'schedule.startDate',
      label: 'date',
      type: 'DATETIME'
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
}