import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CoreModule } from 'src/app/core/core.module';
import { IconComponent } from '../icons/icon.component';
import { ChartActionsComponent } from './components/actions/chart-actions.component';
import { ChartBarVerticalComponent } from './components/bar-vertical/chart-bar-vertical.component';
import { ChartContainerComponent } from './components/frame/chart-container.component';
import { ChartSummaryComponent } from './components/summary/chart-summary.component';

const components = [
  ChartActionsComponent,
  ChartBarVerticalComponent,
  ChartContainerComponent,
  ChartSummaryComponent,
];

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
];

const modules = [
  CoreModule,
  IconComponent,
];

const libs = [
  NgxChartsModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components,
  ],
})
export class ChartModule { }
