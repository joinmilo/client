import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { contestsFeatureKey } from 'src/app/core/constants/feature.constants';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { selectContestDetails } from '../../state/portal-contest-details-landing.selectors';

@Component({
  selector: 'app-contest-portal-details-summary',
  templateUrl: './contest-portal-details-summary.component.html',
  styleUrls: ['./contest-portal-details-summary.component.scss'],
})
export class ContestPortalDetailsSummaryComponent {

  public contest = this.store.select(selectContestDetails);

  public portalUrl = portalUrl;
  public contestsFeatureKey = contestsFeatureKey;
  
  constructor(private store: Store) { }

}
