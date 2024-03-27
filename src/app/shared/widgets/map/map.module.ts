
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AddressPieceComponent } from 'ngx-cinlib/address';
import { DatePieceComponent } from 'ngx-cinlib/date/piece';
import { TranslatablePipe } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';
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
];

const libs = [
  AddressPieceComponent,
  DatePieceComponent,
  IconComponent,
  LeafletModule,
  TranslatablePipe,
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