import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AnalyticsDto, IntervalFilter, Maybe } from 'src/app/core/api/generated/schema';
import { scoreDistributionKey, timeAmountDistributionKey, timeAverageDistributionKey } from 'src/app/core/constants/analytics.constant';
import { CoreModule } from 'src/app/core/core.module';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { Period } from 'src/app/core/typings/period';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { IntervalFilterComponent } from 'src/app/shared/filter/interval/interval-filter.component';
import { ChartModule } from '../../../chart/chart.module';
import { AnalyticsParams } from '../../typings/analytics';

@Component({
  selector: 'app-analytics-rating',
  templateUrl: './analytics-rating.component.html',
  styleUrls: ['./analytics-rating.component.scss'],
  standalone: true,
  imports: [
    ChartModule,
    CommonModule,
    CoreModule,
    DateRangeFilterComponent,
    IntervalFilterComponent,
  ]
})
export class AnalyticsRatingComponent implements OnInit {

  @Input({ required: true })
  public set data (data: Maybe<AnalyticsDto[]>) {
    data?.forEach(statistic => {
      switch(statistic.name) {
        case scoreDistributionKey:
          this.scoreDistribution = statistic;
          break;
        case timeAmountDistributionKey:
          this.timeAmountDistribution = statistic;
          break;
        case timeAverageDistributionKey:
          this.timeAverageDistribution = statistic;
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
    icon: ['far', 'circle-question'] as IconProp,
  };
  
  public scoreDistribution?: AnalyticsDto;
  public scoreDistributionColor = '--color-primary-200';
  public scoreDistributionKey = scoreDistributionKey;
  public scoreDistributionAction = {
    ...this.helpAction, clicked: () => this.store.dispatch(CoreActions.setHelp({
      titleLabel: 'scoreDistributionHelpTitle',
      contentLabel: 'scoreDistributionHelpDescription'
    }))
  };

  public timeAmountDistribution?: AnalyticsDto;
  public timeAmountDistributionColor = '--color-accent-200';
  public timeAmountDistributionKey = timeAmountDistributionKey;
  public timeAmountDistributionAction = { 
    ...this.helpAction, clicked: () => this.store.dispatch(CoreActions.setHelp({
      titleLabel: 'timeAmountDistributionHelpTitle',
      contentLabel: 'timeAmountDistributionHelpDescription'
    }))
  };

  public timeAverageDistribution?: AnalyticsDto;
  public timeAverageDistributionColor = '--color-success-200';
  public timeAverageDistributionKey = timeAverageDistributionKey;
  public timeAverageDistributionAction = {
    ...this.helpAction, clicked: () => this.store.dispatch(CoreActions.setHelp({
      titleLabel: 'timeAverageDistributionHelpTitle',
      contentLabel: 'timeAverageDistributionHelpDescription'
    }))
  };
  
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