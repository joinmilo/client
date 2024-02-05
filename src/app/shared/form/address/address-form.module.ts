import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { CoreModule } from 'src/app/core/core.module';
import { AddressFormComponent } from './component/address-form.component';
import { addressFormStateKey } from './constants/address-form.constants';
import { AddressValidationService } from './services/address-validator.service';
import { AddressFormEffects } from './state/address-form.effects';
import { addressFormReducer } from './state/address-form.reducer';

const components = [
  AddressFormComponent,
];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

const materials = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];

const modules = [
  CoreModule,
];

const libs = [
  StoreModule.forFeature(addressFormStateKey, addressFormReducer),
  EffectsModule.forFeature([AddressFormEffects]),

  GridColumnDirective,
  GridRowComponent,
]

@NgModule({
  declarations: [...components],
  imports: [
    ...materials,
    ...framework,
    ...modules,
    ...libs,
  ],
  exports: [...components],
  providers: [
    AddressValidationService
  ]
})
export class AddressFormModule { }
