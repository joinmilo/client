import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CkEditorFormComponent } from 'src/app/shared/form/ck-editor/ck-editor-form.component';
import { SuccessComponent } from 'src/app/shared/layout/success/success.component';

import { AddressFormModule } from 'src/app/shared/form/address/address-form.module';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { MediaFormModule } from 'src/app/shared/media/modules/form/media-form.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { PortalParticipateBecomeAuthorComponent } from './components/become-author/portal-participate-become-author.component';
import { PortalParticipateCreateOrganisationComponent } from './components/create-organisation/portal-participate-create-organisation.component';
import { PortalParticipateJoinOrganisationComponent } from './components/join-organisation/portal-participate-join-organisation.component';
import { PortalParticipateComponent } from './components/portal-participate.component';
import { PortalParticipateSuccessBecomeAuthorComponent } from './components/success-become-author/portal-participate-success-become-author.component';
import { PortalParticipateSuccessCreateOrganisationComponent } from './components/success-create-organisation/portal-participate-success-create-organisation.component';
import { PortalParticipateSuccessJoinOrganisationComponent } from './components/success-join-organisation/portal-participate-success-join-organisation.component';
import { portalParticipateStateKey } from './constants/portal-participate.constants';
import { PortalParticipateRoutingModule } from './portal-user-participate-routing.module';
import { PortalParticipateEffects } from './state/portal-participate.effects';
import { portalParticipateReducer } from './state/portal-participate.reducer';

const components = [
  PortalParticipateBecomeAuthorComponent,
  PortalParticipateCreateOrganisationComponent,
  PortalParticipateJoinOrganisationComponent,
  PortalParticipateSuccessBecomeAuthorComponent,
  PortalParticipateSuccessCreateOrganisationComponent,
  PortalParticipateSuccessJoinOrganisationComponent,
  PortalParticipateComponent,
];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
];

const modules = [
  CoreModule,
  CkEditorFormComponent,
  MediaFormModule,
  MediaWidgetsModule,
  PortalParticipateRoutingModule,
  SuccessComponent,
  FormStepperModule,
  GridLayoutModule,
  AddressFormModule
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
