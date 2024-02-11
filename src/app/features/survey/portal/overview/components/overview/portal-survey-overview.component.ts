import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { SortOption, SortPaginate } from 'ngx-cinlib/tables';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { CardType } from 'src/app/shared/widgets/card/typings/card';
import { PortalSurveyOverviewActions } from '../../state/portal-survey-overview.actions';
import { selectSponsoredSurvey, selectSurveyCards } from '../../state/portal-survey-overview.selectors';

@Component({
  selector: 'app-portal-survey-overview',
  templateUrl: './portal-survey-overview.component.html',
  styleUrls: ['./portal-survey-overview.component.scss'],
})
export class PortalSurveyOverviewComponent {

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public surveys = this.store.select(selectSurveyCards);

  public sponsored = this.store.select(selectSponsoredSurvey);

  public cardType = CardType.Content;

  public sortOptions: SortOption[] = [
    {
      label: 'date',
      field: 'survey.dueDate',
    },
    {
      label: 'date',
      field: 'survey.dueDate',
      dir: 'desc'
    },
  ];

   constructor(
    private store: Store,
  ) {
    this.store.dispatch(PortalSurveyOverviewActions.getSponsoredSurvey());
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(PortalSurveyOverviewActions.updateParams(params));
  }

}