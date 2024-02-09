import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddressPieceComponent } from 'ngx-cinlib/address';
import { MailPieceComponent } from 'ngx-cinlib/layouts/mail';
import { PhonePieceComponent } from 'ngx-cinlib/layouts/phone';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
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
  CoreModule,
  MediaWidgetsModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(dealAdminDetailsLandingStateKey, dealAdminDetailsLandingReducer),
  EffectsModule.forFeature([DealAdminDetailsLandingEffects]),

  AddressPieceComponent,
  MailPieceComponent,
  PhonePieceComponent
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
