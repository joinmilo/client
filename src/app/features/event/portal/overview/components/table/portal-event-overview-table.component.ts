import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Column, RowAction, SortPaginate } from 'ngx-cinlib/tables';
import { EventEntity, Maybe } from 'src/app/core/api/generated/schema';
import { likeAction, shareAction } from 'src/app/core/utils/table.utils';
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

  public actions: RowAction<EventEntity>[] = [
    likeAction('EventEntity'),
    shareAction('EventEntity')
  ];

  public columns: Column<EventEntity>[] = [
    {
      field: 'translatables.name',
      label: 'title',
      value: row => this.translationService.translatable(row.translatables, 'name')
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

  public rowClicked(event: Maybe<EventEntity>): void {
    this.router.navigate([event?.slug], { relativeTo: this.activatedRoute })
  }
  
  constructor(
    private store: Store,
    private translationService: TranslationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
}