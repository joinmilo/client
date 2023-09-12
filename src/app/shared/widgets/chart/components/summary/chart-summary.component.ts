import { Component, Input } from '@angular/core';
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
  public value?: unknown;

  public backgroundColor?: string;

}