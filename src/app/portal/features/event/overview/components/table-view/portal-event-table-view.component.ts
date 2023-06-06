import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/table/typings/table';
import { EventEntity } from 'src/schema/schema';
import { selectOverviewData } from '../../state/portal-event-overview.selectors';

@Component({
  selector: 'app-portal-event-table-view',
  templateUrl: './portal-event-table-view.component.html',
  styleUrls: ['./portal-event-table-view.component.scss']
})
export class PortalEventTableViewComponent {

  public events = this.store.select(selectOverviewData);

  public actions: RowAction<EventEntity>[] = [
    { type: 'LIKE' },
    { type: 'SHARE' }
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
      field: 'schedules.startDate',
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