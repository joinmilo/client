import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { SchemaService } from 'src/app/core/services/schema.service';
import { PortalContestOverviewActions } from '../state/portal-contest-overview.actions';
import { selectActiveContests, selectCompletedContests, selectContests, selectSponsoredContest, selectVoteableContests } from '../state/portal-contest-overview.selectors';

@Component({
  selector: 'app-portal-contest-overview',
  templateUrl: './portal-contest-overview.component.html',
  styleUrls: ['./portal-contest-overview.component.scss']
})
export class PortalContestOverviewComponent implements OnDestroy{

  public sponsored = this.store.select(selectSponsoredContest);

  public activeContests = this.store.select(selectActiveContests);

  public completedContests = this.store.select(selectCompletedContests); 

  public voteableContests = this.store.select(selectVoteableContests); 

  private contests = this.store.select(selectContests);

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private schemaService: SchemaService) {
    this.store.dispatch(PortalContestOverviewActions.getSponsoredContest())

    this.contests
    ?.pipe(takeUntil(this.destroy))
    ?.subscribe(contests => this.schemaService.createArraySchema('ContestEntity', contests))
  }
  
  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(PortalContestOverviewActions.updateParams(params));    
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}