import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalUserSettingsComponent } from './components/portal-user-settings.component';
import { PortalUserSettingsRoutingModule } from './portal-user-settings-routing.module';

const components = [
  PortalUserSettingsComponent
];

const framework = [
  CommonModule
];

// const materials = [

// ];

const modules = [
  CoreModule, 
  PortalUserSettingsRoutingModule, 
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
export class PortalUserSettingsModule {}
