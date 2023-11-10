import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AddressPieceComponent } from 'src/app/shared/layout/address/address-piece.component';
import { MailPieceComponent } from 'src/app/shared/layout/mail/mail-piece.component';
import { PhonePieceComponent } from 'src/app/shared/layout/phone/phone-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { OrganisationAdminDetailsLandingComponent } from './components/organisation-admin-details-landing.component';
import { organisationAdminDetailsLandingStateKey } from './constants/organisation-admin-details-landing.constants';
import { OrganisationAdminDetailsLandingEffects } from './state/organisation-admin-details-landing.effects';
import { organisationAdminDetailsLandingReducer } from './state/organisation-admin-details-landing.reducer';

const components = [
  OrganisationAdminDetailsLandingComponent,
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
  MailPieceComponent,
  MediaWidgetsModule,
  PhonePieceComponent,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(organisationAdminDetailsLandingStateKey, organisationAdminDetailsLandingReducer),
  EffectsModule.forFeature([OrganisationAdminDetailsLandingEffects]),
  FontAwesomeModule,
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
export class OrganisationAdminDetailsLandingModule { }
