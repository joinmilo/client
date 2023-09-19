import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput, ReportTypeEntity } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { ReportAdminTypesActions } from '../state/report-admin-types.actions';
import { selectTypesData } from '../state/report-portal-types.selectors';

@Component({
  selector: 'app-report-admin-types',
  templateUrl: './report-admin-types.component.html',
  styleUrls: ['./report-admin-types.component.scss']
})
export class ReportAdminTypesComponent {

  public reports = this.store.select(selectTypesData);

  public actions: RowAction<ReportTypeEntity>[] = [    
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'edit'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: type =>
        this.store.dispatch(ReportAdminTypesActions.deleteType(type)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<ReportTypeEntity>[] = [
    {
      field: 'translatables.name',
      label: 'type',
      type: row => this.translationService.translatable(row.translatables, 'name')
    },
  ];
  
  constructor(
    private store: Store,
    private translationService: TranslationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(ReportAdminTypesActions.updateParams(params));
  }
}