import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalFavoritesComponent } from './components/portal-favorites.component';
import { PortalFavoritesRoutingModule } from './portal-favorites-routing.module';

const components = [
  PortalFavoritesComponent
];

const framework = [
  CommonModule
];

// const materials = [

// ];

const modules = [
  CoreModule, 
  PortalFavoritesRoutingModule, 
  TitleModule
];

// const libs = [

// ];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    // ...materials,
    ...modules,
    // ...libs
  ],
  exports: [...components],
})
export class PortalFavoritesModule {}
