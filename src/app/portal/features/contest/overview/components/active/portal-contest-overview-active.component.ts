import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardType } from 'src/app/shared/card/typings/card';
import { selectActiveContests } from '../../state/portal-contest-overview.selectors';

@Component({
  selector: 'app-portal-contest-overview-active',
  templateUrl: './portal-contest-overview-active.component.html',
  styleUrls: ['./portal-contest-overview-active.component.scss']
})
export class PortalContestOverviewActiveComponent {
  
  public cardType = CardType.Content;

  public activeContests = this.store.select(selectActiveContests); 

  constructor(
    private store: Store,
  ) { }  
}