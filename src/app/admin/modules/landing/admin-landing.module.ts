import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { MailPieceComponent } from 'src/app/shared/layout/mail/mail-piece.component';
import { PhonePieceComponent } from 'src/app/shared/layout/phone/phone-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { FlipCardSliderComponent } from 'src/app/shared/widgets/sliders/flip-card-slider/flip-card-slider.component';
import { AdminLandingRoutingModule } from './admin-landing-routing.module';
import { AdminLandingComponent } from './components/admin-landingComponent';
import { AdminLandingContactComponent } from './components/contact/admin-landing-contact.component';
import { AdminLandingMilestoneComponent } from './components/milestone/admin-landing-milestone.component';
import { adminLandingStateKey } from './constants/admin-landing.constants';
import { AdminLandingEffects } from './state/admin-landing.effects';
import { adminLandingReducer } from './state/admin-landing.reducer';


const components = [
  AdminLandingComponent,
  AdminLandingContactComponent,
  AdminLandingMilestoneComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
];

const modules = [
  CoreModule,
  AdminLandingRoutingModule,
  FlipCardSliderComponent,
  MailPieceComponent,
  PhonePieceComponent,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminLandingStateKey, adminLandingReducer),
  EffectsModule.forFeature([AdminLandingEffects]),
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
export class AdminLandingModule { }
