import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CoreModule } from 'src/app/core/core.module';
import { AddressPieceComponent } from 'src/app/shared/layout/address/address-piece.component';
import { MailPieceComponent } from 'src/app/shared/layout/mail/mail-piece.component';
import { PhonePieceComponent } from 'src/app/shared/layout/phone/phone-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaModule } from 'src/app/shared/media/media.module';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { EventAdminDetailsGoogleSearchComponent } from './components/event-admin-details-google-search.component';
import { eventAdminDetailsGoogleSearchStateKey } from './constants/event-admin-details-google-search.constants';
import { EventAdminDetailsGoogleSearchEffects } from './state/event-admin-details-google-search.effects';
import { eventAdminDetailsGoogleSearchReducer } from './state/event-admin-details-google-search.reducer';

const components = [
  EventAdminDetailsGoogleSearchComponent,
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
  NgxChartsModule
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
  StoreModule.forFeature(eventAdminDetailsGoogleSearchStateKey, eventAdminDetailsGoogleSearchReducer),
  EffectsModule.forFeature([EventAdminDetailsGoogleSearchEffects]),
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
export class EventAdminDetailsGoogleSearchModule { }
