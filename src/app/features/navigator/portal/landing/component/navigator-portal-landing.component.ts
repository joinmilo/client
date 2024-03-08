import { Component } from '@angular/core';
import { navigatorFeatureKey } from 'src/app/core/constants/feature.constants';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { navigatorQuestionsUrl } from '../../questions/constants/navigator-questions.constant';

@Component({
  selector: 'app-navigator-portal-landing',
  templateUrl: './navigator-portal-landing.component.html',
  styleUrls: ['./navigator-portal-landing.component.scss']
})
export class NavigatorPortalLandingComponent {

  public questionsUrl = `/${portalUrl}/${navigatorFeatureKey}/${navigatorQuestionsUrl}`;
}