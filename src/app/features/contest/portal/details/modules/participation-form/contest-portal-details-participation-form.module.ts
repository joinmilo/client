import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RichtextEditorFormComponent } from 'ngx-cinlib/forms/richtext';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaFormComponent } from 'ngx-cinlib/media/forms';
import { CoreModule } from 'src/app/core/core.module';
import { SuccessComponent } from 'src/app/shared/layout/success/success.component';
import { ContestPortalDetailsParticipationFormComponent } from './components/portal-contest-details-participation-form.component';
import { contestPortalDetailsParticipationFormStateKey } from './constants/contest-portal-details-participation-form.constants';
import { ContestPortalDetailsParticipationFormEffects } from './state/contest-portal-details-participation-form.effects';
import { contestPortalDetailsParticipationFormReducer } from './state/contest-portal-details-participation-form.reducer';

const components = [
  ContestPortalDetailsParticipationFormComponent
]

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule, 
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
  SuccessComponent,
];

const libs = [
  StoreModule.forFeature(contestPortalDetailsParticipationFormStateKey, contestPortalDetailsParticipationFormReducer),
  EffectsModule.forFeature([ContestPortalDetailsParticipationFormEffects]),

  FormStepComponent,
  FormStepperComponent,
  GridRowComponent,
  MediaFormComponent,
  PageTitleComponent,
  RichtextEditorFormComponent,
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
export class ContestPortalDetailsParticipationFormModule { }
