import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RichtextEditorFormComponent } from 'ngx-cinlib/forms/richtext';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaFormComponent } from 'ngx-cinlib/media/forms';
import { CoreModule } from 'src/app/core/core.module';
import { DealFilterModule } from 'src/app/shared/filter/deal/deal-filter.module';
import { AddressFormModule } from 'src/app/shared/form/address/address-form.module';
import { ContactFormComponent } from 'src/app/shared/form/contact/contact-form.component';
import { DealAdminFormComponent } from './component/deal-admin-form.component';
import { dealAdminFormStateKey } from './constants/deal-admin-form.constants';
import { DealAdminFormRoutingModule } from './deal-admin-form-routing.module';
import { DealAdminFormEffects } from './state/deal-portal-form.effects';
import { dealAdminFormReducer } from './state/deal-portal-form.reducer';

const components = [
  DealAdminFormComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSelectModule,
  FormsModule,
  MatRadioModule,
  ReactiveFormsModule,
];

const modules = [
  AddressFormModule,
  ContactFormComponent,
  CoreModule,
  DealFilterModule,
  DealAdminFormRoutingModule,
];

const libs = [
  StoreModule.forFeature(dealAdminFormStateKey, dealAdminFormReducer),
  EffectsModule.forFeature([DealAdminFormEffects]),

  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
  I18nDirective,
  MediaFormComponent,
  PageTitleComponent,
  RichtextEditorFormComponent,
  TranslatablePipe,
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
export class DealAdminFormModule { }
