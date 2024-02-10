import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { AddressFormModule } from 'src/app/shared/form/address/address-form.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AdminSettingsAddressRoutingModule } from './admin-settings-address-routing.module';
import { AdminSettingsAddressFormComponent } from './components/form/admin-settings-address-form.component';
import { AdminSettingsAddressOverviewComponent } from './components/overview/admin-settings-address.component';
import { adminSettingsAddressStateKey } from './constants/admin-settings-address.constants';
import { AdminSettingsAddressEffects } from './state/admin-settings-address.effects';
import { adminSettingsAddressReducer } from './state/admin-settings-address.reducer';

const components = [
  AdminSettingsAddressFormComponent,
  AdminSettingsAddressOverviewComponent
]

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
];

const modules = [
  AddressFormModule,
  AdminSettingsAddressRoutingModule,
  CoreModule,
  TableModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsAddressStateKey, adminSettingsAddressReducer),
  EffectsModule.forFeature([AdminSettingsAddressEffects]),

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
export class AdminSettingsAddressModule { }
