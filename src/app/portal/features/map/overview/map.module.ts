import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { DealFilterModule } from 'src/app/shared/filter/deal-filter/deal-filter.module';
import { EventFilterModule } from 'src/app/shared/filter/event-filter/event-filter.module';
import { OrganisationFilterModule } from 'src/app/shared/filter/organisation-filter/organisation-filter.module';
import { MapAttributionComponent } from './components/attribution/map-overview-attribution.component';
import { PortalMapOverviewListComponent } from './components/list/portal-map-overview-list.component';
import { MapPopupComponent } from './components/map-popup/map-popup.component';
import { MapResultCountComponent } from './components/map-result-count/map-result-count.component';
import { MapMarkerComponent } from './components/marker/portal-map-overview-marker.component';
import { PortalMapOverviewComponent } from './components/portal-map-overview.component';
import { mapFeatureKey } from './constants/map.constants';
import { MapPortalRoutingModule } from './map-routing.module';
import { MapEffects } from './state/map.effects';
import { mapReducer } from './state/map.reducer';


const components = [
  MapAttributionComponent,
  PortalMapOverviewListComponent,
  MapPopupComponent,
  MapMarkerComponent,
  MapResultCountComponent
]

const pages = [
  PortalMapOverviewComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  StoreModule.forFeature(mapFeatureKey, mapReducer),
  EffectsModule.forFeature([MapEffects])
];

const materials = [
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
];

const modules = [
  CardModule,
  CoreModule,
  DealFilterModule,
  EventFilterModule,
  OrganisationFilterModule,
  MapPortalRoutingModule,
]

const libs = [
  FontAwesomeModule,
  LeafletModule,
  LeafletMarkerClusterModule
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
})
export class MapPortalModule {}
