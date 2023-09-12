import { Directive, Input, OnChanges, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Observable, Subject, isObservable, takeUntil } from 'rxjs';
import { selectChartDefaultColors } from 'src/app/core/state/selectors/core.selectors';
import { ChartAction } from './chart-actions';

@Directive()
export abstract class AxisChart implements OnChanges, OnDestroy {

  @Input()
  public actions?: ChartAction[];

  @Input()
  public set colors(colors: string[]) {
    this.schemeCustom = { ...this.schemeDefault,
      domain: colors.map(color => color.startsWith('--')
        ? getComputedStyle(document.documentElement)
          .getPropertyValue(color as string)
        : color
      )
    };
  }
  
  @Input()
  public set data(data: Observable<unknown> | unknown) {
    isObservable(data)
      ? data
        .pipe(takeUntil(this.destroy))
        .subscribe(results => this.results = results)
      : (this.results = data);
  }

  @Input()
  public showGridLines = false;

  @Input()
  public xAxisLabel = '';

  @Input()
  public yAxisLabel = '';

  @Input()
  public titleLabel?: string;

  @Input()
  public title?: string;

  @Input()
  public xAxis = true;

  @Input()
  public yAxis = true;

  public get scheme(): Color {
    return this.schemeCustom ?? this.schemeDefault;
  }

  public schemeCustom?: Color;

  public schemeDefault: Color = {
    group: ScaleType.Time,
    name: 'colors',
    selectable: true,
    domain: []
  };

  public showXAxisLabel = false;

  public showYAxisLabel = false;

  public results: unknown;

  protected destroy = new Subject<void>();

  constructor(
    protected store: Store) {
      this.store.select(selectChartDefaultColors)
        .subscribe(defaultColors => {
          if (defaultColors) {
            this.schemeDefault = {
              ...this.schemeDefault, domain: defaultColors,
            };
          }
        })
  }

  public ngOnChanges(): void {
    this.showXAxisLabel = !!this.xAxisLabel;
    this.showYAxisLabel = !!this.yAxisLabel;
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}