import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { FilterSortPaginateInput, ReportEntity } from 'src/app/core/api/generated/schema';
import { ReportAdminOverviewActions } from '../state/report-admin-overview.actions';
import { selectOverviewData } from '../state/report-portal-overview.selectors';

@Component({
  selector: 'app-report-admin-overview',
  templateUrl: './report-admin-overview.component.html',
  styleUrls: ['./report-admin-overview.component.scss']
})
export class ReportAdminOverviewComponent {

  public reports = this.store.select(selectOverviewData);

  public actions: RowAction<ReportEntity>[] = [
    {
      icon: 'trash',
      callback: report =>
        this.store.dispatch(ReportAdminOverviewActions.deleteReport(report)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<ReportEntity>[] = [
    {
      field: 'name',
      label: 'name',
      sort: true
    },
    {
      field: 'email',
      label: 'email',
      sort: true
    },
    {
      field: 'type.name',
      label: 'type',
      value: row => this.translationService.watchTranslatable(row.type?.translatables, 'name')
    },
    {
      field: 'modified',
      label: 'date',
      type: 'DATETIME',
      sort: true,
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(ReportAdminOverviewActions.updateParams(params));
  }
}
