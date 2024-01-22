import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { ArticleFilterModule } from 'src/app/shared/filter/article/article-filter.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AuthorSettingsAdminApprovalOverviewRoutingModule } from './admin-settings-privilege-application-routing.module';
import { AdminSettingsPrivilegeApplicationOverviewComponent } from './components/overview/admin-settings-privilege-application-overview.component';
import { AdminSettingsPrivilegeApplicationRoleAssignComponent } from './components/role-assign/admin-settings-privilege-application-role-assign.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { adminSettingsPrivilegeApplicationStateKey } from './constants/admin-settings-privilege-application.constants';
import { AdminSettingsPrivilegeApplicationEffects } from './state/admin-settings-privilege-application.effects';
import { adminPrivilegeApplicationReducer } from './state/admin-settings-privilege-application.reducer';

const components = [
  AdminSettingsPrivilegeApplicationOverviewComponent,
  AdminSettingsPrivilegeApplicationRoleAssignComponent,
]

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

const modules = [
  ArticleFilterModule,
  AuthorSettingsAdminApprovalOverviewRoutingModule,
  CoreModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsPrivilegeApplicationStateKey, adminPrivilegeApplicationReducer),
  EffectsModule.forFeature([AdminSettingsPrivilegeApplicationEffects]),
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
export class AdminSettingsPrivilegeApplicationModule { }
