import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, SurveyEntity } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { shareAction } from 'src/app/shared/widgets/table/utils/table-component-action.utils';
import { SurveyAdminOverviewActions } from '../state/survey-admin-overview.actions';
import { selectOverviewData } from '../state/survey-admin-overview.selectors';

@Component({
  selector: 'app-survey-admin-overview',
  templateUrl: './survey-admin-overview.component.html',
  styleUrls: ['./survey-admin-overview.component.scss']
})
export class SurveyAdminOverviewComponent {

  public surveys = this.store.select(selectOverviewData);

  public actions: RowAction<SurveyEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.slug, 'edit'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'bullhorn',
      callback: row =>
        this.store.dispatch(SurveyAdminOverviewActions.sponsorSurvey(row)),
      tooltipLabel: 'highlightInPortal',
      privileges: ['surveys_admin'],
    },
    {
      icon: 'trash',
      callback: survey =>
        this.store.dispatch(SurveyAdminOverviewActions.deleteSurvey(survey)),
      tooltipLabel: 'delete'
    },

    shareAction('SurveyEntity'),
  ];

  public columns: Column<SurveyEntity>[] = [
    {
      field: 'translatables.name',
      label: 'survey',
      value: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'contact.name',
      label: 'contact',
    },
    {
      field: 'startDate',
      label: 'startDate',
      type: 'DATETIME',
      sort: true,
    },
    {
      field: 'dueDate',
      label: 'dueDate',
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
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,    
    private translationService: TranslationService
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(SurveyAdminOverviewActions.updateParams(params));
  }
  public rowClicked(survey: Maybe<SurveyEntity>): void {
    this.router.navigate([survey?.slug], { relativeTo: this.activatedRoute })
  }
}
