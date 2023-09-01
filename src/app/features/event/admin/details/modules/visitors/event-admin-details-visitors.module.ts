import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AddressPieceComponent } from 'src/app/shared/layout/address/address-piece.component';
import { MailPieceComponent } from 'src/app/shared/layout/mail/mail-piece.component';
import { PhonePieceComponent } from 'src/app/shared/layout/phone/phone-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
import { MediaModule } from 'src/app/shared/widgets/media/media.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { EventAdminDetailsVisitorsComponent } from './components/event-admin-details-visitors.component';
import { eventAdminDetailsVisitorsStateKey } from './constants/event-admin-details-visitors.constants';
import { EventAdminDetailsVisitorsEffects } from './state/event-admin-details-visitors.effects';
import { eventAdminDetailsVisitorsReducer } from './state/event-admin-details-visitors.reducer';

const components = [
  EventAdminDetailsVisitorsComponent,
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
  TableModule,
  TitleModule,
  CalendarModule,
  AddressPieceComponent,
  PhonePieceComponent,
  MailPieceComponent,
];

const libs = [
  StoreModule.forFeature(eventAdminDetailsVisitorsStateKey, eventAdminDetailsVisitorsReducer),
  EffectsModule.forFeature([EventAdminDetailsVisitorsEffects]),
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
export class EventAdminDetailsVisitorsModule { }
