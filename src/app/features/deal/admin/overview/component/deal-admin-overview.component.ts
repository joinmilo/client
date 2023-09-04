import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DealEntity, FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
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
        this.router.navigate([row?.slug, 'edit'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'bullhorn',
      callback: row =>
        this.store.dispatch(DealAdminOverviewActions.sponsorDeal(row)),
      tooltipLabel: 'highlightInPortal'
    },
    {
      icon: 'trash',
      callback: deal =>
        this.store.dispatch(DealAdminOverviewActions.deleteDeal(deal)),
      tooltipLabel: 'delete'
    },

    'SHARE',
  ];

  public columns: Column<DealEntity>[] = [
    {
      field: 'translatables.name',
      label: 'deals',
      type: row => this.translationService.translatable(row.translatables, 'name')
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
