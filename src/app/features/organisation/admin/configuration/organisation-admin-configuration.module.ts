import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { OrganisationAdminConfigurationComponent } from './component/organisation-admin-configuration.component';
import { organisationAdminConfigurationStateKey } from './constants/organisation-admin-configuration.constants';
import { OrganisationAdminConfigurationRoutingModule } from './organisation-admin-configuration-routing.module';
import { OrganisationAdminConfigurationEffects } from './state/organisation-admin-configuration.effects';
import { organisationAdminConfigurationReducer } from './state/organisation-admin-configuration.reducer';

const components = [
  OrganisationAdminConfigurationComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
];

const modules = [
  CoreModule,
  OrganisationAdminConfigurationRoutingModule,
];

const libs = [
  StoreModule.forFeature(organisationAdminConfigurationStateKey, organisationAdminConfigurationReducer),
  EffectsModule.forFeature([OrganisationAdminConfigurationEffects]),

  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
  PageTitleComponent,
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
export class OrganisationAdminConfigurationModule { }
