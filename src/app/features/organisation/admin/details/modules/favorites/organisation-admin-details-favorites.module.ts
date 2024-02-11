import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { OrganisationAdminDetailsFavoritesComponent } from './components/organisation-admin-details-favorites.component';
import { organisationAdminDetailsFavoritesStateKey } from './constants/organisation-admin-details-favorites.constants';
import { OrganisationAdminDetailsFavoritesEffects } from './state/organisation-admin-details-favorites.effects';
import { organisationAdminDetailsFavoritesReducer } from './state/organisation-admin-details-favorites.reducer';

const components = [
  OrganisationAdminDetailsFavoritesComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
];

const libs = [
  StoreModule.forFeature(organisationAdminDetailsFavoritesStateKey, organisationAdminDetailsFavoritesReducer),
  EffectsModule.forFeature([OrganisationAdminDetailsFavoritesEffects]),

  TableComponent,
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
export class OrganisationAdminDetailsFavoritesModule { }
