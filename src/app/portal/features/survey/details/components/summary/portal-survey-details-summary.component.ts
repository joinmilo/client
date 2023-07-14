import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSurveyDetails } from '../../state/portal-survey-details.selectors';

@Component({
  selector: 'app-portal-survey-details-summary',
  templateUrl: './portal-survey-details-summary.component.html',
  styleUrls: ['./portal-survey-details-summary.component.scss'],
})
export class PortalSurveyDetailsSummaryComponent {

  public survey = this.store.select(selectSurveyDetails);

  constructor(private store: Store) { }

}
