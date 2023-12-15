import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AnalyticsDto, IntervalFilter, Maybe } from 'src/app/core/api/generated/schema';
import { searchConsoleClicksKey, searchConsoleCtrKey, searchConsoleImpressionsKey, searchConsolePositionsKey } from 'src/app/core/constants/analytics.constant';
import { CoreModule } from 'src/app/core/core.module';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { Period } from 'src/app/core/typings/period';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { IntervalFilterComponent } from 'src/app/shared/filter/interval/interval-filter.component';
import { RegularIconsType } from 'src/assets/fontawesome/regular-icons';
import { ChartModule } from '../../../chart/chart.module';
import { AnalyticsParams } from '../../typings/analytics';

@Component({
  selector: 'app-analytics-search',
  templateUrl: './analytics-search.component.html',
  styleUrls: ['./analytics-search.component.scss'],
  standalone: true,
  imports: [
    ChartModule,
    CommonModule,
    CoreModule,
    DateRangeFilterComponent,
    IntervalFilterComponent,
  ]
})
export class AnalyticsSearchComponent implements OnInit {

  @Input({ required: true })
  public set data (data: Maybe<AnalyticsDto[]>) {
    data?.forEach(statistic => {
      switch(statistic.name) {
        case searchConsoleClicksKey:
          this.clicks = statistic;
          break;
        case searchConsoleImpressionsKey:
          this.impressions = statistic;
          break;
        case searchConsolePositionsKey:
          this.positions = statistic;
          break;
        case searchConsoleCtrKey:
          this.ctr = statistic;
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
  
  public clicks?: AnalyticsDto;
  public clicksColor = '--color-primary-200';
  public clicksKey = searchConsoleClicksKey;
  public clicksAction = {
    ...this.helpAction, clicked: () => this.store.dispatch(CoreActions.setHelp({
      titleLabel: 'clicksHelpTitle',
      contentLabel: 'clicksHelpDescription'
    }))
  };

  public impressions?: AnalyticsDto;
  public impressionsColor = '--color-accent-200';
  public impressionsKey = searchConsoleImpressionsKey;
  public impressionsAction = { 
    ...this.helpAction, clicked: () => this.store.dispatch(CoreActions.setHelp({
      titleLabel: 'impressionsHelpTitle',
      contentLabel: 'impressionsHelpDescription'
    }))
  };

  public positions?: AnalyticsDto;
  public positionsColor = '--color-success-200';
  public positionsKey = searchConsolePositionsKey;
  public positionsAction = {
    ...this.helpAction, clicked: () => this.store.dispatch(CoreActions.setHelp({
      titleLabel: 'positionsHelpTitle',
      contentLabel: 'positionsHelpDescription'
    }))
  };

  public ctr?: AnalyticsDto;
  public ctrColor = '--color-warn-200';
  public ctrKey = searchConsoleCtrKey;
  public ctrAction = {
    ...this.helpAction, clicked: () => this.store.dispatch(CoreActions.setHelp({
      titleLabel: 'ctrHelpTitle',
      contentLabel: 'ctrHelpDescription'
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