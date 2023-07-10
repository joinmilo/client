import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardType } from 'src/app/shared/card/typings/card';
import { selectCompletedContests } from '../../state/portal-contest-overview.selectors';

@Component({
  selector: 'app-portal-contest-overview-completed',
  templateUrl: './portal-contest-overview-completed.component.html',
  styleUrls: ['./portal-contest-overview-completed.component.scss']
})
export class PortalContestOverviewCompletedComponent {

  public cardType = CardType.Content;
  
  public completedContests = this.store.select(selectCompletedContests); 

  constructor(
    private store: Store,
  ) { }
}