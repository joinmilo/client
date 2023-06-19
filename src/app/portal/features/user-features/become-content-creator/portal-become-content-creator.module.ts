import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalBecomeContentCreatorComponent } from './components/portal-become-content-creator.component';
import { PortalBecomeContentCreatorRoutingModule } from './portal-become-content-creator-routing.module';

const components = [
  PortalBecomeContentCreatorComponent
];

const framework = [
  CommonModule
];

// const materials = [

// ];

const modules = [
  CoreModule,
  PortalBecomeContentCreatorRoutingModule,
  TitleModule,
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
export class PortalBecomeContentCreatorModule {}
