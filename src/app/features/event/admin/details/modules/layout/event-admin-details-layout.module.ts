import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { RadioCardFormModule } from 'src/app/shared/form/radio-card/radio-card-form.module';
import { AddressPieceComponent } from 'src/app/shared/layout/address/address-piece.component';
import { MailPieceComponent } from 'src/app/shared/layout/mail/mail-piece.component';
import { PhonePieceComponent } from 'src/app/shared/layout/phone/phone-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
import { IconComponent } from 'src/app/shared/widgets/icon/icon.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { EventAdminDetailsLayoutComponent } from './components/event-admin-details-layout.component';
import { eventAdminDetailsLayoutStateKey } from './constants/event-admin-details-layout.constants';
import { EventAdminDetailsLayoutEffects } from './state/event-admin-details-layout.effects';
import { eventAdminDetailsLayoutReducer } from './state/event-admin-details-layout.reducer';

const components = [
  EventAdminDetailsLayoutComponent,
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
  AddressPieceComponent,
  CalendarModule,
  CoreModule,
  IconComponent,
  MailPieceComponent,
  MediaWidgetsModule,
  PhonePieceComponent,
  RadioCardFormModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(eventAdminDetailsLayoutStateKey, eventAdminDetailsLayoutReducer),
  EffectsModule.forFeature([EventAdminDetailsLayoutEffects]),
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
export class EventAdminDetailsLayoutModule { }
