import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectContestDetails } from '../../state/portal-contest-details.selectors';

@Component({
  selector: 'app-portal-contest-details-summary',
  templateUrl: './portal-contest-details-summary.component.html',
  styleUrls: ['./portal-contest-details-summary.component.scss'],
})
export class PortalContestDetailsSummaryComponent {

  public contest = this.store.select(selectContestDetails);

  constructor(private store: Store) { }

}
