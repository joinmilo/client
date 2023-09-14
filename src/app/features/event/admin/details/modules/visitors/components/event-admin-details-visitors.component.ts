import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, takeUntil } from 'rxjs';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { Period } from 'src/app/core/typings/period';
import { EventAdminDetailsVisitorsActions } from '../state/event-admin-details-visitors.actions';
import { selectVisitorAnalytics } from '../state/event-admin-details-visitors.selectors';
import { visitorsKey } from './../../../../../../../core/constants/analytics.constant';

@Component({
  selector: 'app-event-admin-details-visitors',
  templateUrl: './event-admin-details-visitors.component.html',
  styleUrls: ['./event-admin-details-visitors.component.scss']
})
export class EventAdminDetailsVisitorsComponent implements OnInit, OnDestroy {

  private destroy = new Subject<void>();

  public slug?: Maybe<string>;

  public helpAction = {
    label: 'help',
    icon: ['far', 'circle-question'] as IconProp,
  };

  public visitorsAnalytics = this.store.select(selectVisitorAnalytics);
  public visitorColor = '--color-primary-200';
  public visitorKey = visitorsKey;
  public clicksAction = {
    ...this.helpAction, clicked: () => this.openHelp(this.visitorKey)
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.slug = params[slug],
        this.updateParams(
          params[slug],
          this.initPeriod
          )
    }
    )
  }

  private openHelp(statisicsKey: Maybe<string>): void {
    console.log(statisicsKey);
  }

  public initPeriod: Period = {
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    endDate: new Date()
  }

  public updateParams(slug: Maybe<string>, period: Period) {
    this.store.dispatch(EventAdminDetailsVisitorsActions.updateParams(this.slug ?? slug, period));
  }


  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}