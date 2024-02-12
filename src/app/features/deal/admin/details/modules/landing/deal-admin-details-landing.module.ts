import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MailPieceComponent } from 'ngx-cinlib/layouts/mail';
import { CoreModule } from 'src/app/core/core.module';
import { AddressPieceComponent } from 'src/app/shared/layout/address/address-piece.component';
import { PhonePieceComponent } from 'src/app/shared/layout/phone/phone-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { DealAdminDetailsLandingComponent } from './components/deal-admin-details-landing.component';
import { dealAdminDetailsLandingStateKey } from './constants/deal-admin-details-landing.constants';
import { DealAdminDetailsLandingEffects } from './state/deal-admin-details-landing.effects';
import { dealAdminDetailsLandingReducer } from './state/deal-admin-details-landing.reducer';

const components = [
  DealAdminDetailsLandingComponent,
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
  CalendarModule,
  CoreModule,
  MediaWidgetsModule,
  PhonePieceComponent,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(dealAdminDetailsLandingStateKey, dealAdminDetailsLandingReducer),
  EffectsModule.forFeature([DealAdminDetailsLandingEffects]),

  MailPieceComponent,
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
export class DealAdminDetailsLandingModule { }
