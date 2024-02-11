import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DateRangeFilterComponent } from 'ngx-cinlib/filters/date-range';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { OrganisationAdminDetailsCommentsComponent } from './components/organisation-admin-details-comments.component';
import { organisationAdminDetailsCommentsStateKey } from './constants/organisation-admin-details-comments.constants';
import { OrganisationAdminDetailsCommentsEffects } from './state/organisation-admin-details-comments.effects';
import { organisationAdminDetailsCommentsReducer } from './state/organisation-admin-details-comments.reducer';

const components = [
  OrganisationAdminDetailsCommentsComponent,
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
  StoreModule.forFeature(organisationAdminDetailsCommentsStateKey, organisationAdminDetailsCommentsReducer),
  EffectsModule.forFeature([OrganisationAdminDetailsCommentsEffects]),

  DateRangeFilterComponent,
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
export class OrganisationAdminDetailsCommentsModule { }
