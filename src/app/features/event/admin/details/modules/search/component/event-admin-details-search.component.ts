import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { IntervalFilter, Maybe } from 'src/app/core/api/generated/schema';
import { searchConosleClicksKey, searchConsoleCtrKey, searchConsoleImpressionsKey, searchConsolePositionsKey } from 'src/app/core/constants/analytics.constant';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { Period } from 'src/app/core/typings/period';
import { EventAdminDetailsSearchActions } from '../state/event-admin-details-search.actions';
import { selectClicksStatistics, selectCtrStatistics, selectImpressionsStatistics, selectPositionsStatistics } from '../state/event-admin-details-search.selectors';

@Component({
  selector: 'app-event-admin-details-search',
  templateUrl: './event-admin-details-search.component.html',
  styleUrls: ['./event-admin-details-search.component.scss']
})
export class EventAdminDetailsSearchComponent implements OnInit {

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

  public initPeriod: Period = {
    startDate: new Date(new Date().getFullYear(), 0, 1, 12),
    endDate: new Date()
  }

  public initInterval = IntervalFilter.Monthly;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }
  
  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(
      map(params => params[slug]),
      take(1)
    ).subscribe(slug => {
      if (slug) {
        this.store.dispatch(EventAdminDetailsSearchActions.init(
          slug,
          this.initPeriod,
          this.initInterval,
        ));
      }
    });
  }
    
  public updatePeriod($event: Period): void {
    this.store.dispatch(EventAdminDetailsSearchActions.updatePeriod($event));
  }

  public updateInterval($event: IntervalFilter): void {
    this.store.dispatch(EventAdminDetailsSearchActions.updateInterval($event));
  }

  private openHelp(statisicsKey: Maybe<string>): void {
    console.log(statisicsKey);
  }

}