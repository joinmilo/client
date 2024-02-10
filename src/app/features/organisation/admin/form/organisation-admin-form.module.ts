import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RichtextEditorFormComponent } from 'ngx-cinlib/forms/richtext';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaFormComponent } from 'ngx-cinlib/media/forms';
import { CoreModule } from 'src/app/core/core.module';
import { OrganisationFilterModule } from 'src/app/shared/filter/organisation/organisation-filter.module';
import { AddressFormModule } from 'src/app/shared/form/address/address-form.module';
import { ContactFormComponent } from 'src/app/shared/form/contact/contact-form.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { OrganisationAdminFormComponent } from './component/organisation-admin-form.component';
import { organisationAdminFormStateKey } from './constants/organisation-admin-form.constants';
import { OrganisationAdminFormRoutingModule } from './organisation-admin-form-routing.module';
import { OrganisationAdminFormEffects } from './state/organisation-admin-form.effects';
import { organisationAdminFormReducer } from './state/organisation-admin-form.reducer';

const components = [
  OrganisationAdminFormComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
];

const modules = [
  AddressFormModule,
  ContactFormComponent,
  CoreModule,
  OrganisationFilterModule,
  OrganisationAdminFormRoutingModule,
  TableModule,
];

const libs = [
  StoreModule.forFeature(organisationAdminFormStateKey, organisationAdminFormReducer),
  EffectsModule.forFeature([OrganisationAdminFormEffects]),

  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
  MediaFormComponent,
  PageTitleComponent,
  RichtextEditorFormComponent,
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
export class OrganisationAdminFormModule { }
