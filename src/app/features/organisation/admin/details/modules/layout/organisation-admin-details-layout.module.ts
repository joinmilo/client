import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioCardGroupComponent } from 'ngx-cinlib/forms/radio-card';
import { IconComponent } from 'ngx-cinlib/icons';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { OrganisationAdminDetailsLayoutComponent } from './components/organisation-admin-details-layout.component';
import { organisationAdminDetailsLayoutStateKey } from './constants/organisation-admin-details-layout.constants';
import { OrganisationAdminDetailsLayoutEffects } from './state/organisation-admin-details-layout.effects';
import { organisationAdminDetailsLayoutReducer } from './state/organisation-admin-details-layout.reducer';

const components = [
  OrganisationAdminDetailsLayoutComponent,
]

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
  TableModule,
];

const libs = [
  StoreModule.forFeature(organisationAdminDetailsLayoutStateKey, organisationAdminDetailsLayoutReducer),
  EffectsModule.forFeature([OrganisationAdminDetailsLayoutEffects]),

  IconComponent,
  PageTitleComponent,
  RadioCardGroupComponent,
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
export class OrganisationAdminDetailsLayoutModule { }
