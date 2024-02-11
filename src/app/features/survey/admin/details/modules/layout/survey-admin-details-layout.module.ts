import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioCardGroupComponent } from 'ngx-cinlib/forms/radio-card';
import { IconComponent } from 'ngx-cinlib/icons';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { SurveyAdminDetailsLayoutComponent } from './components/survey-admin-details-layout.component';
import { surveyAdminDetailsLayoutStateKey } from './constants/survey-admin-details-layout.constants';
import { SurveyAdminDetailsLayoutEffects } from './state/survey-admin-details-layout.effects';
import { surveyAdminDetailsLayoutReducer } from './state/survey-admin-details-layout.reducer';

const components = [
  SurveyAdminDetailsLayoutComponent,
]

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
];

const libs = [
  StoreModule.forFeature(surveyAdminDetailsLayoutStateKey, surveyAdminDetailsLayoutReducer),
  EffectsModule.forFeature([SurveyAdminDetailsLayoutEffects]),

  IconComponent,
  PageTitleComponent,
  RadioCardGroupComponent,
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
export class SurveyAdminDetailsLayoutModule { }
