import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EventEntity, FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { EventAdminOverviewActions } from '../state/event-admin-overview.actions';
import { selectOverviewData } from '../state/event-portal-overview.selectors';

@Component({
  selector: 'app-event-admin-overview',
  templateUrl: './event-admin-overview.component.html',
  styleUrls: ['./event-admin-overview.component.scss']
})
export class EventAdminOverviewComponent {

  public events = this.store.select(selectOverviewData);

  public actions: RowAction<EventEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.slug, 'edit'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'bullhorn',
      callback: row =>
        this.store.dispatch(EventAdminOverviewActions.sponsorEvent(row)),
      tooltipLabel: 'highlightInPortal'
    },
    {
      icon: 'trash',
      callback: event =>
        this.store.dispatch(EventAdminOverviewActions.deleteEvent(event)),
      tooltipLabel: 'delete'
    },

    'SHARE',
  ];

  public columns: Column<EventEntity>[] = [
    {
      field: 'translatables.name',
      label: 'activities',
      type: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'contact.name',
      label: 'contact',
    },
    {
      field: 'modified',
      label: 'lastModified',
      type: 'DATETIME',
      sort: true,
    },
    {
      field: 'category',
      label: 'category',
      type: 'CATEGORY',
    },
    {
      field: 'sponsored',
      label: 'sponsored',
      type: 'BOOLEAN',
      sort: true,
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,    
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(EventAdminOverviewActions.updateParams(params));
  }

  public rowClicked(event: Maybe<EventEntity>): void {
    this.router.navigate([event?.slug], { relativeTo: this.activatedRoute })
  }
}
