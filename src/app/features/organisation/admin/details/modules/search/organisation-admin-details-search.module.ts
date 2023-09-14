import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { IntervalFilterComponent } from 'src/app/shared/filter/interval/interval-filter.component';
import { ChartModule } from 'src/app/shared/widgets/chart/chart.module';
import { OrganisationAdminDetailsSearchComponent } from './component/organisation-admin-details-search.component';
import { organisationAdminDetailsSearchStateKey } from './constants/organisation-admin-details-search.constants';
import { OrganisationAdminDetailsSearchEffects } from './state/organisation-admin-details-search.effects';
import { organisationAdminDetailsSearchReducer } from './state/organisation-admin-details-search.reducer';

const components = [
  OrganisationAdminDetailsSearchComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  ChartModule,
  CoreModule,
  DateRangeFilterComponent,
  IntervalFilterComponent,
];

const libs = [
  StoreModule.forFeature(organisationAdminDetailsSearchStateKey, organisationAdminDetailsSearchReducer),
  EffectsModule.forFeature([OrganisationAdminDetailsSearchEffects]),
  FontAwesomeModule,
  NgxChartsModule,
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
export class OrganisationAdminDetailsSearchModule { }
