import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardType } from 'src/app/shared/card/typings/card';
import { SurveyPageFeatureActions } from '../state/survey-page-feature.actions';
import { selectRecentSurveys } from '../state/survey-page-feature.selectors';

@Component({
  selector: 'app-survey-page-feature',
  templateUrl: './survey-page-feature.component.html',
  styleUrls: ['./survey-page-feature.component.scss']
})
export class SurveyPageFeatureComponent {
  
  public cardType = CardType.Content;

  public surveys = this.store.select(selectRecentSurveys);

  constructor(
    private store: Store, 
  ) {
    this.store.dispatch(SurveyPageFeatureActions.getRecentSurveys());
  }

}
