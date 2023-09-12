import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';
import { Maybe } from 'src/app/core/api/generated/schema';
import { clicksKey, impressionsKey } from 'src/app/core/constants/analytics.constant';
import { Period } from 'src/app/core/typings/period';
import { EventAdminDetailsSearchActions } from '../state/event-admin-details-search.actions';
import { selectClicksStatistics, selectImpressionsStatistics } from '../state/event-admin-details-search.selectors';

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
  public clicksKey = clicksKey;
  public clicksAction = { ...this.helpAction,
    clicked: () => this.openHelp(this.clicksKey) 
  };

  public impressions = this.store.select(selectImpressionsStatistics);
  public impressionsColor = '--color-accent-200';
  public impressionsKey = impressionsKey;
  public impressionAction = { 
    ...this.helpAction, clicked: () => this.openHelp(this.impressionsKey)
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