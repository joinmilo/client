import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Column } from 'src/app/shared/table/typings/table';
import { EventEntity } from 'src/schema/schema';
import { selectOverviewData } from '../../state/event.selectors';

@Component({
  selector: 'app-event-list-view',
  templateUrl: './event-list-view.component.html',
  styleUrls: ['./event-list-view.component.scss']
})
export class EventListViewComponent {

  public events = this.store.select(selectOverviewData);

  public columns: Column<EventEntity>[] = [
    {
      field: 'id',
      label: 'title',
      type: row => `row.translatables | translatable: 'name' | async`
    },
    {
      field: 'schedule.startDate',
      label: 'test',
      type: 'DATETIME'
    },
  ];

  @ViewChild(MatPaginator)
  public paginator!: MatPaginator;

  @ViewChild(MatSort)
  public sort!: MatSort;
  
  constructor(
    private store: Store,
  ) { }

}