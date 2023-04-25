/* eslint-disable  @typescript-eslint/no-explicit-any */
import {NgModule, Type} from '@angular/core';
import {MapPageComponent} from './pages/map/map.component';
import {CommonModule} from '@angular/common';
import {CoreModule} from '../../../core/core.module';
import {MapPortalRoutingModule} from './map-routing.module';
import {PortalCommonModule} from '../../common/common.module';
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

const components: Type<any>[] = [
];

const internal: Type<any>[] = [
  MapEventFilterComponent,
  MapOrganisationsFilterComponent,
  MarkerComponent,
]

const pages: Type<any>[] = [
  MapPageComponent,
];

const framework: any[] = [
  CommonModule,
  ReactiveFormsModule,
  StoreModule.forFeature(mapFeatureKey, mapReducer),
  EffectsModule.forFeature([MapEffects])
];

const materials: Type<any>[] = [
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
];

const modules: Type<any>[] =[
  CardModule,
  CoreModule,
  MapPortalRoutingModule,
  PortalCommonModule
]

@NgModule({
  declarations: [
    ...components,
    ...internal,
    ...pages
  ],
    imports: [
        ...framework,
        ...materials,
        ...modules,
        LeafletModule,
    ],
  exports: [
    ...components
  ]
})
export class MapPortalModule {}
