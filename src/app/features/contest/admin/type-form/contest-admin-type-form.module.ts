import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { IconFormComponent } from 'src/app/shared/form/icon/icon-form.component';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { ContestAdminTypeFormComponent } from './components/contest-admin-type-form.component';
import { contestAdminTypeFormStateKey } from './constants/contest-admin-type-form.constants';
import { ContestAdminTypeFormRoutingModule } from './contest-admin-type-form-routing.module';
import { ContestAdminTypeFormEffects } from './state/contest-admin-type-form.effects';
import { contestAdminFormReducer } from './state/contest-admin-type-form.reducer';



const components = [
  ContestAdminTypeFormComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

const modules = [
  CoreModule,
  ContestAdminTypeFormRoutingModule,
  TitleModule,
  FormStepperModule,
  GridLayoutModule,
  IconFormComponent
];

const libs = [
  StoreModule.forFeature(contestAdminTypeFormStateKey, contestAdminFormReducer),
  EffectsModule.forFeature([ContestAdminTypeFormEffects]),
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
export class ContestAdminTypeFormModule { }
