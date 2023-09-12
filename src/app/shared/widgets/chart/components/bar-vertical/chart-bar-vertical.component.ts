import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AxisChart } from '../../typings/chart-axis.base';

@Component({
  selector: 'app-chart-bar-vertical',
  templateUrl: './chart-bar-vertical.component.html',
  styleUrls: ['./chart-bar-vertical.component.scss'],
})
export class ChartBarVerticalComponent extends AxisChart {

  @Input()
  public barPadding = 32;

  constructor(store: Store) {
    super(store);
  }

}