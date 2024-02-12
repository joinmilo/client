import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { DealEntity, FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { shareAction } from 'src/app/core/utils/table.utils';
import { DealAdminOverviewActions } from '../state/deal-admin-overview.actions';
import { selectOverviewData } from '../state/deal-portal-overview.selectors';

@Component({
  selector: 'app-deal-admin-overview',
  templateUrl: './deal-admin-overview.component.html',
  styleUrls: ['./deal-admin-overview.component.scss']
})
export class DealAdminOverviewComponent {

  public deals = this.store.select(selectOverviewData);

  public actions: RowAction<DealEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.slug, 'form'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'bullhorn',
      callback: row =>
        this.store.dispatch(DealAdminOverviewActions.sponsorDeal(row)),
      tooltipLabel: 'highlightInPortal',
      privileges: ['deals_admin']
    },
    {
      icon: 'trash',
      callback: deal =>
        this.store.dispatch(DealAdminOverviewActions.deleteDeal(deal)),
      tooltipLabel: 'delete'
    },

    shareAction('DealEntity'),
  ];

  public columns: Column<DealEntity>[] = [
    {
      field: 'translatables.name',
      label: 'deals',
      value: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'creator.user.email',
      label: 'creator',
    },
    {
      field: 'category',
      label: 'category',
      type: 'CATEGORY',
    },
    {
      field: 'modified',
      label: 'lastModified',
      type: 'DATETIME',
      sort: true,
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
    private router: Router,
    private store: Store,
    private translationService: TranslationService
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(DealAdminOverviewActions.updateParams(params));
  }

  public rowClicked(deal: Maybe<DealEntity>): void {
    this.router.navigate([deal?.slug], { relativeTo: this.activatedRoute })
  }
}
