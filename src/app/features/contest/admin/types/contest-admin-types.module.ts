import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { ContestAdminTypesComponent } from './component/contest-admin-types.component';
import { contestAdminTypesStateKey } from './constants/contest-admin-types.constants';
import { ContestAdminTypesRoutingModule } from './contest-admin-types-routing.module';
import { ContestAdminTypesEffects } from './state/contest-portal-types.effects';
import { contestAdminTypesReducer } from './state/contest-portal-types.reducer';

const components = [
  ContestAdminTypesComponent
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
  ContestAdminTypesRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(contestAdminTypesStateKey, contestAdminTypesReducer),
  EffectsModule.forFeature([ContestAdminTypesEffects]),
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
export class ContestAdminTypesModule { }
