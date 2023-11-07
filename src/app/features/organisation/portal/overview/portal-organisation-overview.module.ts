import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { OrganisationFilterModule } from 'src/app/shared/filter/organisation/organisation-filter.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { NoDataComponent } from 'src/app/shared/layout/no-data/no-data.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { PortalOrganisationOverviewCardComponent } from './components/card/portal-organisation-overview-card.component';
import { PortalOrganisationOverviewMapComponent } from './components/map/portal-organisation-overview-map.component';
import { PortalOrganisationOverviewComponent } from './components/portal-organisation-overview.component';
import { PortalOrganisationOverviewSuburbComponent } from './components/suburb/portal-organisation-overview-suburb.component';
import { PortalOrganisationOverviewTableComponent } from './components/table/portal-organisation-overview-table.component';
import { portalOrganisationOverviewStateKey } from './constants/portal-organisation-overview.constants';
import { PortalOrganisationOverviewRoutingModule } from './portal-organisation-overview-routing.module';
import { PortalOrganisationOverviewEffects } from './state/portal-organisation-overview.effects';
import { portalOrganisationOverviewReducer } from './state/portal-organisation-overview.reducer';

const components = [
  PortalOrganisationOverviewComponent,
  PortalOrganisationOverviewCardComponent,
  PortalOrganisationOverviewMapComponent,
  PortalOrganisationOverviewTableComponent,
  PortalOrganisationOverviewSuburbComponent,
];

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
  CardModule,
  CardSliderComponent,
  MapModule,
  OrganisationFilterModule,
  PortalOrganisationOverviewRoutingModule,
  RadioButtonFormModule,
  TableModule,
  TitleModule,
  NoDataComponent
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalOrganisationOverviewStateKey, portalOrganisationOverviewReducer),
  EffectsModule.forFeature([PortalOrganisationOverviewEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class PortalOrganisationOverviewModule { }
