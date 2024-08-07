import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioButtonGroupComponent } from 'ngx-cinlib/forms/radio-button';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { TablePaginatorComponent, TableService } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { DealFilterModule } from 'src/app/shared/filter/deal/deal-filter.module';
import { EventFilterModule } from 'src/app/shared/filter/event/event-filter.module';
import { OrganisationFilterModule } from 'src/app/shared/filter/organisation/organisation-filter.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { PortalMapOverviewFilterComponent } from './components/filter/portal-map-overview-filter.component';
import { PortalMapOverviewListComponent } from './components/list/portal-map-overview-list.component';
import { PortalMapOverviewComponent } from './components/portal-map-overview.component';
import { portalPortalOverviewState } from './constants/portal-map-overview.constants';
import { PortalMapOverviewRoutingModule } from './portal-map-overview-routing.module';
import { PortalMapOverviewEffects } from './state/portal-map-overview.effects';
import { portalMapOverviewReducer } from './state/portal-map-overview.reducer';

const components = [
  PortalMapOverviewFilterComponent,
  PortalMapOverviewListComponent,
]

const pages = [
  PortalMapOverviewComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  StoreModule.forFeature(portalPortalOverviewState, portalMapOverviewReducer),
  EffectsModule.forFeature([PortalMapOverviewEffects])
];

const materials = [
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSidenavModule,
];

const modules = [
  CardModule,
  CoreModule,
  DealFilterModule,
  EventFilterModule,
  MapModule,
  OrganisationFilterModule,
  PortalMapOverviewRoutingModule,
];

const libs = [
  IconComponent,
  I18nDirective,
  RadioButtonGroupComponent,
  TablePaginatorComponent
];

const providers = [
  TableService,
]

@NgModule({
  declarations: [
    ...components,
    ...pages,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components
  ],
  providers: [
    ...providers
  ]
})
export class PortalMapOverviewModule {}
