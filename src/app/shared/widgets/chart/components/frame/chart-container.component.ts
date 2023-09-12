import { Component, Input } from '@angular/core';
import { ChartAction } from '../../typings/chart-actions';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.scss'],
})
export class ChartContainerComponent {

  @Input()
  public titleLabel?: string;

  @Input()
  public title?: string;

  @Input()
  public actions?: ChartAction[];

}