import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { Subject, takeUntil } from 'rxjs';
import { EventEntity, FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { eventsFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { shareAction } from 'src/app/core/utils/table.utils';
import { OrganisationAdminDetailsEventsActions } from '../state/organisation-admin-details-events.actions';
import { selectOrganisationAdminDetailsEvents } from '../state/organisation-admin-details-events.selectors';

@Component({
  selector: 'app-organisation-admin-details-events',
  templateUrl: './organisation-admin-details-events.component.html',
  styleUrls: ['./organisation-admin-details-events.component.scss']
})
export class OrganisationAdminDetailsEventsComponent implements OnInit, OnDestroy {

  public events = this.store.select(selectOrganisationAdminDetailsEvents);

  public slug?: Maybe<string>;

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
      // value: row => this.translationService.watchTranslatable(row.translatables, 'name')
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
    this.activatedRoute.parent?.params.pipe(
      takeUntil(this.destroy)
    )
    .subscribe(params => {
      this.slug = params[slug],
      this.updateParams(params[slug])
    })
  }

  public updateParams(slug?: Maybe<string>, params?: FilterSortPaginateInput) {
    this.store.dispatch(OrganisationAdminDetailsEventsActions.updateParams(this.slug ?? slug, params));
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
