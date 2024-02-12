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
import { CoreModule } from 'src/app/core/core.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AdminSettingsSuburbRoutingModule } from './admin-settings-suburb-routing.module';
import { AdminSettingsSuburbFormComponent } from './components/form/admin-settings-suburb-form.component';
import { AdminSettingsSuburbOverviewComponent } from './components/overview/admin-settings-suburb-overview.component';
import { adminSettingsSuburbStateKey } from './constants/admin-settings-suburb.constants';
import { AdminSettingsSuburbEffects } from './state/admin-settings-suburb.effects';
import { adminSettingsSuburbReducer } from './state/admin-settings-suburb.reducer';

const components = [
  AdminSettingsSuburbFormComponent,
  AdminSettingsSuburbOverviewComponent,
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
  CoreModule,
  AdminSettingsSuburbRoutingModule,
  GridLayoutModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsSuburbStateKey, adminSettingsSuburbReducer),
  EffectsModule.forFeature([AdminSettingsSuburbEffects]),

  FormStepComponent,
  FormStepperComponent,
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
export class AdminSettingsSuburbModule { }
