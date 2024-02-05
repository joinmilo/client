
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { DatePieceComponent } from 'ngx-cinlib/date/piece';
import { IconComponent } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';
import { AddressPieceComponent } from '../../layout/address/address-piece.component';
import { MapAttributionComponent } from './components/attribution/map-attribution.component';
import { MapComponent } from './components/map.component';
import { MapMarkerComponent } from './components/marker/map-marker.component';
import { MapPopupComponent } from './components/popup/map-popup.component';

const components = [
  MapAttributionComponent,
  MapMarkerComponent,
  MapPopupComponent,
  MapComponent,
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  AddressPieceComponent,
];

const libs = [
  DatePieceComponent,
  IconComponent,
  LeafletModule,
  LeafletMarkerClusterModule,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...modules,
  ],
  exports: [...components],
})
export class MapModule { }