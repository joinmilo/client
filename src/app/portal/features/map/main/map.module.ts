import {NgModule} from '@angular/core';
import {MapPageComponent} from './components/map/map.component';
import {CommonModule} from '@angular/common';
import {CoreModule} from 'src/app/core/core.module';
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
import {CardModule} from 'src/app/shared/card/card.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {MapMarkerComponent} from './components/map-marker/map-marker.component';
import {LeafletMarkerClusterModule} from '@asymmetrik/ngx-leaflet-markercluster';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MapCardListComponent} from './components/map-card-list/map-card-list.component';
import {MatIconModule} from '@angular/material/icon';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MapAttributionComponent} from './components/map-attribution/map-attribution.component';
import {MapPopupComponent} from './components/map-popup/map-popup.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DealFilterModule} from 'src/app/shared/filter/deal-filter/deal-filter.module';
import {EventFilterModule} from 'src/app/shared/filter/event-filter/event-filter.module';
import {OrganisationFilterModule} from 'src/app/shared/filter/organisation-filter/organisation-filter.module';
import { MapResultCountComponent } from './components/map-result-count/map-result-count.component';


const components = [
  MapAttributionComponent,
  MapCardListComponent,
  MapPopupComponent,
  MapMarkerComponent,
  MapResultCountComponent
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
