import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { OrganisationFilterModule } from 'src/app/shared/filter/organisation/organisation-filter.module';
import { AddressFormModule } from 'src/app/shared/form/address/address-form.module';
import { CkEditorFormComponent } from 'src/app/shared/form/ck-editor/ck-editor-form.component';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaFormModule } from 'src/app/shared/media/modules/form/media-form.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
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
  CkEditorFormComponent,
  CoreModule,
  FormStepperModule,
  GridLayoutModule,
  MediaFormModule,
  MediaWidgetsModule,
  OrganisationFilterModule,
  OrganisationAdminFormRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(organisationAdminFormStateKey, organisationAdminFormReducer),
  EffectsModule.forFeature([OrganisationAdminFormEffects]),
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
