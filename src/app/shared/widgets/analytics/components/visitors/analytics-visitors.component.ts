import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartBarVerticalComponent, ChartSummaryComponent } from 'ngx-cinlib/charts';
import { Period } from 'ngx-cinlib/core';
import { DateRangeFilterComponent } from 'ngx-cinlib/filters/date-range';
import { IntervalFilterComponent } from 'ngx-cinlib/filters/interval';
import { RegularIconsType } from 'ngx-cinlib/icons';
import { AnalyticsDto, IntervalFilter, Maybe } from 'src/app/core/api/generated/schema';
import { visitorsKey, visitsKey } from 'src/app/core/constants/analytics.constant';
import { CoreModule } from 'src/app/core/core.module';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { AnalyticsParams } from '../../typings/analytics';
@Component({
  selector: 'app-analytics-visitors',
  templateUrl: './analytics-visitors.component.html',
  styleUrls: ['./analytics-visitors.component.scss'],
  standalone: true,
  imports: [
    ChartBarVerticalComponent,
    ChartSummaryComponent,
    CommonModule,
    CoreModule,
    DateRangeFilterComponent,
    IntervalFilterComponent,
  ]
})
export class AnalyticsVisitorsComponent implements OnInit {

  @Input({ required: true })
  public set data(data: Maybe<AnalyticsDto[]>) {
    data?.forEach(statistic => {
      switch (statistic.name) {
        case visitsKey:
          this.visits = statistic;
          break;
        case visitorsKey:
          this.visitors = statistic;
          break;
      }
    })
  }

  @Input()
  public period: Period = {
    startDate: new Date(new Date().getFullYear(), 0, 1, 12),
    endDate: new Date()
  };

  @Input()
  public interval = IntervalFilter.Monthly;

  @Output()
  public params = new EventEmitter<AnalyticsParams>();

  public helpAction = {
    label: 'help',
    icon: 'circle-question' as RegularIconsType,
  };

  public visits?: AnalyticsDto;
  public visitsColor = '--color-primary-200';
  public visitsKey = visitsKey;
  public visitsAction = {
    ...this.helpAction, clicked: () => this.store.dispatch(CoreActions.setHelp({
      titleLabel: 'visitsHelpTitle',
      contentLabel: 'visitsHelpDescription'
    }))
  };

  public visitors?: AnalyticsDto;
  public visitorsColor = '--color-accent-200';
  public visitorsKey = visitorsKey;
  public visitorsAction = {
    ...this.helpAction, clicked: () => this.store.dispatch(CoreActions.setHelp({
      titleLabel: 'visitorsHelpTitle',
      contentLabel: 'visitorsHelpDescription'
    }))
  }

  constructor(
    private store: Store) { }

  public ngOnInit(): void {
    this.emit();
  }

  public updatePeriod(period: Period): void {
    this.period = period;
    this.emit();
  }

  public updateInterval(interval: IntervalFilter): void {
    this.interval = interval;
    this.emit();
  }

  private emit(): void {
    this.params.emit({
      interval: this.interval,
      period: this.period
    });
  }

}