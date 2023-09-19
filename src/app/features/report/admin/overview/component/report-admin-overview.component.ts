import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput, ReportEntity } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
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
      field: 'translatables.content',
      label: 'content',
      type: row => this.translationService.translatable(row.translatables, 'content')
    },
    {
      field: 'translatables.name',
      label: 'type',
      type: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'modified',
      label: 'date',
      type: 'DATETIME',
      sort: true,
    },
  ];
  
  constructor(
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(ReportAdminOverviewActions.updateParams(params));
  }
}