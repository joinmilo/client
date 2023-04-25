import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction, SortPaginate } from 'src/app/shared/table/typings/table';
import { EventEntity } from 'src/schema/schema';
import { selectOverviewData } from '../../state/event-overview.selectors';

@Component({
  selector: 'app-event-table-view',
  templateUrl: './event-table-view.component.html',
  styleUrls: ['./event-table-view.component.scss']
})
export class EventTableViewComponent {

  public events = this.store.select(selectOverviewData);

  public actions: RowAction<EventEntity>[] = [
    { type: 'LIKE' },
    { type: 'SHARE' }
  ];

  public columns: Column<EventEntity>[] = [
    {
      field: 'name',
      label: 'title',
      type: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'contact.name',
      label: 'organizer',
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

  public sortPaginate($event: SortPaginate) {
    
  }

}