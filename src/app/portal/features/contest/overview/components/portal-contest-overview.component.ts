import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput } from 'src/schema/schema';
import { PortalContestOverviewActions } from '../state/portal-contest-overview.actions';
import { selectActiveContests, selectCompletedContests, selectSponsoredContest, selectVoteableContests } from '../state/portal-contest-overview.selectors';

@Component({
  selector: 'app-portal-contest-overview',
  templateUrl: './portal-contest-overview.component.html',
  styleUrls: ['./portal-contest-overview.component.scss']
})
export class PortalContestOverviewComponent {

  public sponsored = this.store.select(selectSponsoredContest);

  public activeContests = this.store.select(selectActiveContests);

  public completedContests = this.store.select(selectCompletedContests); 

  public voteableContests = this.store.select(selectVoteableContests); 

  constructor(
    private store: Store,
  ) {
    this.store.dispatch(PortalContestOverviewActions.getSponsoredContest())
  }
  
  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(PortalContestOverviewActions.updateParams(params));    
  }
}