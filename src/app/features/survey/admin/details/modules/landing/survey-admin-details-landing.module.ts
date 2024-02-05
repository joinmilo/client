import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AddressPieceComponent } from 'src/app/shared/layout/address/address-piece.component';
import { PhonePieceComponent } from 'src/app/shared/layout/phone/phone-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
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
  AddressPieceComponent,
  CoreModule,
  CalendarModule,
  MediaWidgetsModule,
  PhonePieceComponent,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(eventAdminDetailsLandingStateKey, eventAdminDetailsLandingReducer),
  EffectsModule.forFeature([SurveyAdminDetailsLandingEffects]),
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
