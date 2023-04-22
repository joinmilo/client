import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/table/typings/table';
import { EventEntity } from 'src/schema/schema';
import { selectOverviewData } from '../../state/event.selectors';

@Component({
  selector: 'app-event-list-view',
  templateUrl: './event-list-view.component.html',
  styleUrls: ['./event-list-view.component.scss']
})
export class EventListViewComponent {

  public events = this.store.select(selectOverviewData);

  public actions: RowAction<EventEntity>[] = [
    {
      type: 'LIKE'
    }
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
  ];

  @ViewChild(MatPaginator)
  public paginator!: MatPaginator;

  @ViewChild(MatSort)
  public sort!: MatSort;
  
  constructor(
    private store: Store,
    private translationService: TranslationService,
  ) { }

}