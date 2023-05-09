/* eslint-disable  @typescript-eslint/no-explicit-any */
import {NgModule, Type} from '@angular/core';
import {MapPageComponent} from './pages/map/map.component';
import {CommonModule} from '@angular/common';
import {CoreModule} from '../../../core/core.module';
import {MapPortalRoutingModule} from './map-routing.module';
import {StoreModule} from '@ngrx/store';
import {mapFeatureKey} from './constants/map.constants';
import {mapReducer} from './state/map.reducer';
import {EffectsModule} from '@ngrx/effects';
import {MapEffects} from './state/map.effects';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MapEventFilterComponent} from './components/forms/event-filter.component';
import {MapOrganisationsFilterComponent} from './components/forms/organisation-filter.component';
import {CardModule} from '../../../shared/card/card.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {MarkerComponent} from './components/marker.component';
import {LeafletMarkerClusterModule} from '@asymmetrik/ngx-leaflet-markercluster';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MapCardListComponent} from './components/map-card-list/map-card-list.component';
import {MatIconModule} from '@angular/material/icon';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MapAttributionComponent} from './components/map-attribution.component';


const components = [
  MapEventFilterComponent,
  MapOrganisationsFilterComponent,
  MarkerComponent,
  MapCardListComponent,
  MapAttributionComponent,
]

const pages = [
  MapPageComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  StoreModule.forFeature(mapFeatureKey, mapReducer),
  EffectsModule.forFeature([MapEffects])
];

const materials: Type<any>[] = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
];

const modules = [
  CardModule,
  CoreModule,
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
    ...pages
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs
  ],
  exports: [
    ...components
  ]
})
export class MapPortalModule {}
