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
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RichtextEditorFormComponent } from 'ngx-cinlib/forms/richtext';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { IconComponent } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';
import { AddressFormModule } from 'src/app/shared/form/address/address-form.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { SuccessComponent } from 'src/app/shared/layout/success/success.component';
import { MediaFormModule } from 'src/app/shared/media/modules/form/media-form.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { PortalParticipateBecomeAuthorComponent } from './components/become-author/portal-participate-become-author.component';
import { PortalParticipateCreateOrganisationComponent } from './components/create-organisation/portal-participate-create-organisation.component';
import { PortalParticipateJoinOrganisationComponent } from './components/join-organisation/portal-participate-join-organisation.component';
import { PortalParticipateComponent } from './components/portal-participate.component';
import { PortalParticipateSuccessBecomeAuthorComponent } from './components/success-become-author/portal-participate-success-become-author.component';
import { PortalParticipateSuccessContestComponent } from './components/success-contest/portal-participate-success-contest.component';
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
  PortalParticipateSuccessContestComponent,
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
  AddressFormModule,
  CoreModule,
  GridLayoutModule,
  MediaFormModule,
  MediaWidgetsModule,
  PortalParticipateRoutingModule,
  SuccessComponent,
];

const libs = [
  StoreModule.forFeature(portalParticipateStateKey, portalParticipateReducer),
  EffectsModule.forFeature([PortalParticipateEffects]),

  FormStepComponent,
  FormStepperComponent,
  IconComponent,
  RichtextEditorFormComponent,
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
