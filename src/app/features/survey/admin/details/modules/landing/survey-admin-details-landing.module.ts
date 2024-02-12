import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { DetailsTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaSliderComponent } from 'ngx-cinlib/media/elements';
import { CoreModule } from 'src/app/core/core.module';
import { SurveyAdminDetailsLandingComponent } from './components/survey-admin-details-landing.component';
import { eventAdminDetailsLandingStateKey } from './constants/survey-admin-details-landing.constants';
import { SurveyAdminDetailsLandingEffects } from './state/survey-admin-details-landing.effects';
import { eventAdminDetailsLandingReducer } from './state/survey-admin-details-landing.reducer';

const components = [
  SurveyAdminDetailsLandingComponent,
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
];

const libs = [
  StoreModule.forFeature(eventAdminDetailsLandingStateKey, eventAdminDetailsLandingReducer),
  EffectsModule.forFeature([SurveyAdminDetailsLandingEffects]),

  DetailsTitleComponent,
  I18nDirective,
  MediaSliderComponent,
  TranslatablePipe,
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
export class SurveyAdminDetailsLandingModule { }
