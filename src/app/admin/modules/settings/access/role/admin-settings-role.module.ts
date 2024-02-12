import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AdminSettingsRoleRoutingModule } from './admin-settings-role-routing.module';
import { AdminSettingsRoleFormComponent } from './components/form/admin-settings-role-form.component';
import { AdminSettingsRoleOverviewComponent } from './components/overview/admin-settings-role-overview.component';
import { adminSettingsRoleStateKey } from './constants/admin-settings-role.constants';
import { AdminSettingsRoleEffects } from './state/admin-settings-role.effects';
import { adminSettingsRoleReducer } from './state/admin-settings-role.reducer';

const components = [
  AdminSettingsRoleOverviewComponent,
  AdminSettingsRoleFormComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

const modules = [
  AdminSettingsRoleRoutingModule,
  CoreModule,
  TableModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsRoleStateKey, adminSettingsRoleReducer),
  EffectsModule.forFeature([AdminSettingsRoleEffects]),

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
export class AdminSettingsRoleModule { }
