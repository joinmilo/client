import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddressPieceComponent } from 'ngx-cinlib/address';
import { CalendarComponent } from 'ngx-cinlib/calendar';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { MailPieceComponent } from 'ngx-cinlib/layouts/mail';
import { PhonePieceComponent } from 'ngx-cinlib/layouts/phone';
import { DetailsTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaSliderComponent, MediaTitleComponent } from 'ngx-cinlib/media/elements';
import { CoreModule } from 'src/app/core/core.module';
import { EventAdminDetailsLandingCalendarComponent } from './components/calendar/event-admin-details-landing-calendar.component';
import { EventAdminDetailsLandingComponent } from './components/event-admin-details-landing.component';
import { eventAdminDetailsLandingStateKey } from './constants/event-admin-details-landing.constants';
import { EventAdminDetailsLandingEffects } from './state/event-admin-details-landing.effects';
import { eventAdminDetailsLandingReducer } from './state/event-admin-details-landing.reducer';

const components = [
  EventAdminDetailsLandingComponent,
  EventAdminDetailsLandingCalendarComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
];

const modules = [
  CoreModule,
];

const libs = [
  StoreModule.forFeature(eventAdminDetailsLandingStateKey, eventAdminDetailsLandingReducer),
  EffectsModule.forFeature([EventAdminDetailsLandingEffects]),

  AddressPieceComponent,
  CalendarComponent,
  DetailsTitleComponent,
  I18nDirective,
  MailPieceComponent,
  MediaSliderComponent,
  MediaTitleComponent,
  PhonePieceComponent,
  TranslatablePipe
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
export class EventAdminDetailsLandingModule { }
