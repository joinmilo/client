import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DealEntity, FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction, SortPaginate } from 'src/app/shared/widgets/table/typings/table';
import { likeAction, shareAction } from 'src/app/shared/widgets/table/utils/table-component-action.utils';
import { PortalDealOverviewActions } from '../../state/portal-deal-overview.actions';
import { selectOverviewData } from '../../state/portal-deal-overview.selectors';

@Component({
  selector: 'app-portal-deal-overview-table',
  templateUrl: './portal-deal-overview-table.component.html',
  styleUrls: ['./portal-deal-overview-table.component.scss']
})
export class PortalDealOverviewTableComponent {

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public deals = this.store.select(selectOverviewData);

  public actions: RowAction<DealEntity>[] = [
    likeAction('DealEntity'),
    shareAction('DealEntity')
  ];

  public columns: Column<DealEntity>[] = [
    {
      field: 'translatables.name',
      label: 'title',
      value: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'creator.user.lastName',
      label: 'createdBy',
      value: row => row.creator?.user?.firstName && row.creator?.user?.lastName
        ? `${row.creator?.user?.firstName} ${row.creator?.user?.lastName}`
        : row.contact?.name
    },
    {
      field: 'contact.email',
      label: 'email',
      sort: true,
    },
    {
      field: 'modified',
      label: 'date',
      type: 'DATETIME',
      sort: true,
    },
    {
      field: 'category',
      label: 'category',
      type: 'CATEGORY',
    },
  ];

  public rowClicked(deal: Maybe<DealEntity>): void {
    this.router.navigate([deal?.slug], { relativeTo: this.activatedRoute })
  }
  
  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(PortalDealOverviewActions.updateParams(params));
  }

  constructor(
    private store: Store,
    private translationService: TranslationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
}