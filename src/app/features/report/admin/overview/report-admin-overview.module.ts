import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { ReportAdminOverviewComponent } from './component/report-admin-overview.component';
import { reportAdminOverviewStateKey } from './constants/report-admin-overview.constants';
import { ReportAdminOverviewRoutingModule } from './report-admin-overview-routing.module';
import { ReportAdminOverviewEffects } from './state/report-portal-overview.effects';
import { reportAdminOverviewReducer } from './state/report-portal-overview.reducer';

const components = [
  ReportAdminOverviewComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
  ReportAdminOverviewRoutingModule,
];

const libs = [
  StoreModule.forFeature(reportAdminOverviewStateKey, reportAdminOverviewReducer),
  EffectsModule.forFeature([ReportAdminOverviewEffects]),

  PageTitleComponent,
  TableComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class ReportAdminOverviewModule { }
