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
import { CardModule } from 'src/app/shared/card/card.module';
import { OrganisationFilterModule } from 'src/app/shared/filter/organisation-filter/organisation-filter.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { CardSliderComponent } from 'src/app/shared/sliders/card-slider/card-slider.component';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalOrganisationOverviewCardComponent } from './components/card/portal-organisation-overview-card.component';
import { PortalOrganisationOverviewEmptyComponent } from './components/empty/portal-organisation-overview-empty.component';
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
  PortalOrganisationOverviewEmptyComponent,
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
  OrganisationFilterModule,
  PortalOrganisationOverviewRoutingModule,
  RadioButtonFormModule,
  TableModule,
  TitleModule,
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
