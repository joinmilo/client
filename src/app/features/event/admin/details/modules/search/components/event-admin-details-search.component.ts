import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';
import { Maybe } from 'src/app/core/api/generated/schema';
import { searchConosleClicksKey, searchConsoleCtrKey, searchConsoleImpressionsKey, searchConsolePositionsKey } from 'src/app/core/constants/analytics.constant';
import { Period } from 'src/app/core/typings/period';
import { EventAdminDetailsSearchActions } from '../state/event-admin-details-search.actions';
import { selectClicksStatistics, selectCtrStatistics, selectImpressionsStatistics, selectPositionsStatistics } from '../state/event-admin-details-search.selectors';

@Component({
  selector: 'app-event-admin-details-search',
  templateUrl: './event-admin-details-search.component.html',
  styleUrls: ['./event-admin-details-search.component.scss']
})
export class EventAdminDetailsSearchComponent {

  public helpAction = {
    label: 'help',
    icon: ['far', 'circle-question'] as IconProp,
  };
  
  public clicks = this.store.select(selectClicksStatistics);
  public clicksColor = '--color-primary-200';
  public clicksKey = searchConosleClicksKey;
  public clicksAction = {
    ...this.helpAction, clicked: () => this.openHelp(this.clicksKey) 
  };

  public impressions = this.store.select(selectImpressionsStatistics);
  public impressionsColor = '--color-accent-200';
  public impressionsKey = searchConsoleImpressionsKey;
  public impressionsAction = { 
    ...this.helpAction, clicked: () => this.openHelp(this.impressionsKey)
  }

  public positions = this.store.select(selectPositionsStatistics);
  public positionsColor = '--color-success-200';
  public positionsKey = searchConsolePositionsKey;
  public positionsAction = {
    ...this.helpAction, clicked: () => this.openHelp(this.positionsKey)
  }

  public ctr = this.store.select(selectCtrStatistics);
  public ctrColor = '--color-warn-200';
  public ctrKey = searchConsoleCtrKey;
  public ctrAction = {
    ...this.helpAction, clicked: () => this.openHelp(this.ctrKey)
  }
  
  constructor(
    private store: Store) { }
    
  public updateParams($event: Period): void {
    this.store.dispatch(EventAdminDetailsSearchActions.updateParams($event));
  }

  private openHelp(statisicsKey: Maybe<string>): void {
    console.log(statisicsKey);
  }

}