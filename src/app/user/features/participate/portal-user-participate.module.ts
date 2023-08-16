import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { PortalParticipateBecomeAuthorComponent } from './components/become-author/portal-participate-become-author.component';
import { PortalParticipateCreateOrganisationComponent } from './components/create-organisation/portal-participate-create-organisation.component';
import { PortalParticipateJoinOrganisationComponent } from './components/join-organisation/portal-participate-join-organisation.component';
import { PortalParticipateComponent } from './components/portal-participate.component';
import { portalParticipateStateKey } from './constants/portal-participate.constants';
import { PortalParticipateRoutingModule } from './portal-user-participate-routing.module';
import { PortalParticipateEffects } from './state/portal-participate.effects';
import { portalParticipateReducer } from './state/portal-participate.reducer';

const components = [
  PortalParticipateBecomeAuthorComponent,
  PortalParticipateCreateOrganisationComponent,
  PortalParticipateJoinOrganisationComponent,
  PortalParticipateComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const modules = [
  CoreModule,
  PortalParticipateRoutingModule,
  
  TitleModule,
];

const materials = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalParticipateStateKey, portalParticipateReducer),
  EffectsModule.forFeature([PortalParticipateEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...materials,
    ...framework,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class PortalParticipateModule { }
