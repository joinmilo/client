import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { ReportAdminTypesComponent } from './component/report-admin-types.component';
import { reportAdminTypesStateKey } from './constants/report-admin-types.constants';
import { ReportAdminTypesRoutingModule } from './report-admin-types-routing.module';
import { ReportAdminTypesEffects } from './state/report-portal-types.effects';
import { reportAdminTypesReducer } from './state/report-portal-types.reducer';

const components = [
  ReportAdminTypesComponent
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
  ReportAdminTypesRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(reportAdminTypesStateKey, reportAdminTypesReducer),
  EffectsModule.forFeature([ReportAdminTypesEffects]),
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
export class ReportAdminTypesModule { }
