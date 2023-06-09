import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalFriendsComponent } from './components/portal-friends.component';
import { PortalFriendsRoutingModule } from './portal-friends-routing.module';

const components = [
  PortalFriendsComponent
];

const framework = [
  CommonModule
];

// const materials = [

// ];

const modules = [
  CoreModule, 
  PortalFriendsRoutingModule, 
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
export class PortalFriendsModule {}
