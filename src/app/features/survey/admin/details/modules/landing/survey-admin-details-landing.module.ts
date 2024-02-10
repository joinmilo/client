import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DetailsTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaSliderComponent } from 'ngx-cinlib/media/elements';
import { CoreModule } from 'src/app/core/core.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
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
  TableModule,
];

const libs = [
  StoreModule.forFeature(eventAdminDetailsLandingStateKey, eventAdminDetailsLandingReducer),
  EffectsModule.forFeature([SurveyAdminDetailsLandingEffects]),

  DetailsTitleComponent,
  MediaSliderComponent,
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
