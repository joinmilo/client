import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { ContestEntity, FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { shareAction } from 'src/app/core/utils/table.utils';
import { ContestAdminOverviewActions } from '../state/contest-admin-overview.actions';
import { selectOverviewData } from '../state/contest-portal-overview.selectors';

@Component({
  selector: 'app-contest-admin-overview',
  templateUrl: './contest-admin-overview.component.html',
  styleUrls: ['./contest-admin-overview.component.scss'],
})
export class ContestAdminOverviewComponent {
  public contests = this.store.select(selectOverviewData);

  public actions: RowAction<ContestEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: (row) =>
        this.router.navigate([row?.slug, 'form'], {
          relativeTo: this.activatedRoute,
        }),
      tooltipLabel: 'edit',
    },
    {
      icon: 'bullhorn',
      callback: (row) =>
        this.store.dispatch(ContestAdminOverviewActions.sponsorContest(row)),
      tooltipLabel: 'highlightInPortal',
      privileges: ['contests_admin'],
    },
    {
      icon: 'trash',
      callback: (contest) =>
        this.store.dispatch(ContestAdminOverviewActions.deleteContest(contest)),
      tooltipLabel: 'delete',
    },

    shareAction('ContestEntity'),
  ];

  public columns: Column<ContestEntity>[] = [
    {
      field: 'name',
      label: 'contests',
      value: (row) =>
        this.translationService.watchTranslatable(row.translatables, 'name'),
    },
    {
      field: 'contact.name',
      label: 'organizer',
    },
    {
      field: 'type.name',
      label: 'type',
      value: (row) =>
        this.translationService.watchTranslatable(row.type?.translatables, 'name'),
    },
    {
      field: 'participations',
      label: 'participants',
      type: 'LIST',
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
    private translationService: TranslationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(ContestAdminOverviewActions.updateParams(params));
  }

  public rowClicked(contest: Maybe<ContestEntity>): void {
    this.router.navigate([contest?.slug], { relativeTo: this.activatedRoute });
  }
}
