import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { EventEntity, FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { eventsFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { shareAction } from 'src/app/shared/widgets/table/utils/table-component-action.utils';
import { id } from '../../../../../../../core/constants/queryparam.constants';
import { OrganisationAdminDetailsEventsActions } from '../state/organisation-admin-details-events.actions';
import { selectOrganisationAdminDetailsEvents } from '../state/organisation-admin-details-events.selectors';

@Component({
  selector: 'app-organisation-admin-details-events',
  templateUrl: './organisation-admin-details-events.component.html',
  styleUrls: ['./organisation-admin-details-events.component.scss']
})
export class OrganisationAdminDetailsEventsComponent implements OnInit, OnDestroy {

  public events = this.store.select(selectOrganisationAdminDetailsEvents);

  public id?: Maybe<string>;

  private destroy = new Subject<void>();

  public actions: RowAction<EventEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([adminUrl, eventsFeatureKey, row?.slug, 'form']),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: event =>
        this.store.dispatch(OrganisationAdminDetailsEventsActions.deleteEvent(event)),
      tooltipLabel: 'delete'
    },

    shareAction('EventEntity'),
  ];

  public columns: Column<EventEntity>[] = [
    {
      field: 'name',
      label: 'activities',
      // value: row => this.translationService.translatable(row.translatables, 'name')
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
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private router: Router,
  ) { 
  }

  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.id = params[id],
        this.updateParams(params[id])
    })
  }

  public updateParams(id?: Maybe<string>, params?: FilterSortPaginateInput) {
    this.store.dispatch(OrganisationAdminDetailsEventsActions.updateParams(this.id ?? id, params));
  }
  
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}