import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { map, take } from 'rxjs';
import { IntervalFilter } from 'src/app/core/api/generated/schema';
import { visitorsKey, visitsKey } from 'src/app/core/constants/analytics.constant';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { Help } from 'src/app/core/typings/help';
import { Period } from 'src/app/core/typings/period';
import { EventAdminDetailsVisitorsActions } from '../state/event-admin-details-visitors.actions';
import { selectVisitorsStatistics, selectVisitsStatistics } from '../state/event-admin-details-visitors.selectors';

@Component({
  selector: 'app-event-admin-details-visitors',
  templateUrl: './event-admin-details-visitors.component.html',
  styleUrls: ['./event-admin-details-visitors.component.scss']
})
export class EventAdminDetailsVisitorsComponent implements OnInit {

  public helpAction = {
    label: 'help',
    icon: ['far', 'circle-question'] as IconProp,
  };

  public visits = this.store.select(selectVisitsStatistics);
  public visitsColor = '--color-primary-200';
  public visitsKey = visitsKey;
  public visitsAction = {
    ...this.helpAction, clicked: () => this.openHelp(this.visitsKey)
  };

  public visitors = this.store.select(selectVisitorsStatistics);
  public visitorsColor = '--color-accent-200';
  public visitorsKey = visitorsKey;
  public visitorsAction = {
    ...this.helpAction, clicked: () => this.openHelp(this.visitorsKey)
  }

  public initPeriod: Period = {
    startDate: new Date(new Date().getFullYear(), 0, 1, 12),
    endDate: new Date()
  };

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
        this.store.dispatch(EventAdminDetailsVisitorsActions.init(
          slug,
          this.initPeriod,
          this.initInterval,
        ));
      }
    });
  }

  public updatePeriod($event: Period): void {
    this.store.dispatch(EventAdminDetailsVisitorsActions.updatePeriod($event));
  }

  public updateInterval($event: IntervalFilter): void {
    this.store.dispatch(EventAdminDetailsVisitorsActions.updateInterval($event));
  }

  private openHelp(statisicsKey: Maybe<string>): void {
    switch (statisicsKey) {
      case visitsKey:
        this.dispatch({
          titleLabel: 'visitsHelpTitle',
          contentLabel: 'visitsHelpDescription'
        });
        break;
      case visitorsKey:
        this.dispatch({
          titleLabel: 'visitorsHelpTitle',
          contentLabel: 'visitorsHelpDescription'
        });
        break;
    }
  }

  private dispatch(help: Help): void {
    this.store.dispatch(CoreActions.setHelp(help));
  }
}