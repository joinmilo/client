import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddressPieceComponent } from 'ngx-cinlib/address';
import { MailPieceComponent } from 'ngx-cinlib/layouts/mail';
import { PhonePieceComponent } from 'ngx-cinlib/layouts/phone';
import { DetailsTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaSliderComponent } from 'ngx-cinlib/media/elements';
import { CoreModule } from 'src/app/core/core.module';
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
  CoreModule,
  TableModule,
];

const libs = [
  StoreModule.forFeature(organisationAdminDetailsLandingStateKey, organisationAdminDetailsLandingReducer),
  EffectsModule.forFeature([OrganisationAdminDetailsLandingEffects]),

  AddressPieceComponent,
  DetailsTitleComponent,
  MailPieceComponent,
  MediaSliderComponent,
  PhonePieceComponent,
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
