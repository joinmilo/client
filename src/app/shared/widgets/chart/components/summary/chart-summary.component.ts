import { Component, Input } from '@angular/core';
import { Maybe } from 'src/app/core/api/generated/schema';
import { ChartAction } from '../../typings/chart-actions';

@Component({
  selector: 'app-chart-summary',
  templateUrl: './chart-summary.component.html',
  styleUrls: ['./chart-summary.component.scss']
})
export class ChartSummaryComponent {

  @Input()
  public actions?: ChartAction[];

  @Input()
  public set color(color: string) {
    this.backgroundColor = color.startsWith('--')
      ? getComputedStyle(document.documentElement)
          .getPropertyValue(color as string)
      : color;
  }

  @Input()
  public titleLabel?: string;

  @Input()
  public set summary(summary: Maybe<number>) {
    if (summary) {
      this.value = summary % 1 != 0 //only fixed if decimal
        ? summary.toFixed(2)
        : summary.toString();
    }
  }

  @Input()
  public unit?: string;

  public backgroundColor?: string;

  public value?: string;

}