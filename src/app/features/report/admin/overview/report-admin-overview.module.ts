import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
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
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(reportAdminOverviewStateKey, reportAdminOverviewReducer),
  EffectsModule.forFeature([ReportAdminOverviewEffects]),
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
