import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardType } from 'src/app/shared/card/typings/card';
import { selectVoteableContests } from '../../state/portal-contest-overview.selectors';

@Component({
  selector: 'app-portal-contest-overview-voteable',
  templateUrl: './portal-contest-overview-voteable.component.html',
  styleUrls: ['./portal-contest-overview-voteable.component.scss']
})
export class PortalContestOverviewVoteableComponent { 
  
  public cardType = CardType.Content;
  
  public voteableContests = this.store.select(selectVoteableContests); 

  constructor(
    private store: Store,
  ) { } 
}