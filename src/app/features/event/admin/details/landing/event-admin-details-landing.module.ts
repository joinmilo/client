import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { EventFilterModule } from 'src/app/shared/filter/event-filter/event-filter.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { AddressPieceComponent } from 'src/app/shared/pieces/address/address-piece.component';
import { MailPieceComponent } from 'src/app/shared/pieces/mail/mail-piece.component';
import { PhonePieceComponent } from 'src/app/shared/pieces/phone/phone-piece.component';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
import { MediaModule } from 'src/app/shared/widgets/media/media.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { eventAdminDetailsLandingStateKey } from '../constants/event-admin-details.constants';
import { EventAdminDetailsLandingCalendarComponent } from './components/calendar/event-admin-details-landing-calendar.component';
import { EventAdminDetailsLandingComponent } from './components/event-admin-details-landing.component';
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
  FontAwesomeModule,
  MediaModule,
  MatGridListModule,
];

const modules = [
  CoreModule,
  EventFilterModule,
  TableModule,
  TitleModule,
  CalendarModule,
  AddressPieceComponent,
  PhonePieceComponent,
  MailPieceComponent,
];

const libs = [
  StoreModule.forFeature(eventAdminDetailsLandingStateKey, eventAdminDetailsLandingReducer),
  EffectsModule.forFeature([EventAdminDetailsLandingEffects]),
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
