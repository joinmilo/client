import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalSharedContentComponent } from './components/portal-shared-content.component';
import { PortalSharedContentRoutingModule } from './portal-shared-content-routing.module';

const components = [
  PortalSharedContentComponent
];

const framework = [
  CommonModule
];

// const materials = [

// ];

const modules = [
  CoreModule, 
  PortalSharedContentRoutingModule, 
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
export class PortalSharedContentModule {}
