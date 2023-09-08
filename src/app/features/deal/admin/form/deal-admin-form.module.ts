import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DealFilterModule } from 'src/app/shared/filter/deal/deal-filter.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { DealAdminFormComponent } from './component/deal-admin-form.component';
import { dealAdminFormStateKey } from './constants/deal-admin-form.constants';
import { DealAdminFormRoutingModule } from './deal-admin-form-routing.module';
import { DealAdminFormEffects } from './state/deal-portal-form.effects';
import { dealAdminFormReducer } from './state/deal-portal-form.reducer';

const components = [
  DealAdminFormComponent
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
  DealFilterModule,
  DealAdminFormRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(dealAdminFormStateKey, dealAdminFormReducer),
  EffectsModule.forFeature([DealAdminFormEffects]),
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
export class DealAdminFormModule { }
