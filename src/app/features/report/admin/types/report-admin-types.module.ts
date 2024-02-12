import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
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
];

const libs = [
  StoreModule.forFeature(reportAdminTypesStateKey, reportAdminTypesReducer),
  EffectsModule.forFeature([ReportAdminTypesEffects]),

  I18nDirective,
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
export class ReportAdminTypesModule { }
