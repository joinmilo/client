import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { ContestFilterModule } from 'src/app/shared/filter/contest/contest-filter.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { ContestAdminFormComponent } from './component/contest-admin-form.component';
import { contestAdminFormStateKey } from './constants/contest-admin-form.constants';
import { ContestAdminFormRoutingModule } from './contest-admin-form-routing.module';
import { ContestAdminFormEffects } from './state/contest-portal-form.effects';
import { contestAdminFormReducer } from './state/contest-portal-form.reducer';

const components = [
  ContestAdminFormComponent
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
  ContestFilterModule,
  ContestAdminFormRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(contestAdminFormStateKey, contestAdminFormReducer),
  EffectsModule.forFeature([ContestAdminFormEffects]),
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
export class ContestAdminFormModule { }
