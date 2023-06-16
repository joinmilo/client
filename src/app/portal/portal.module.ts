import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingComponent } from '../shared/loading/loading.component';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { PortalCookieBannerModule } from './shared/cookie-banner/portal-cookie-banner.module';
import { PortalFooterModule } from './shared/footer/portal-footer.module';
import { PortalHeaderModule } from './shared/header/portal-header.module';

const components = [
  PortalComponent
];

const framework = [
  CommonModule,
  PortalRoutingModule
];

const materials = [
  MatProgressBarModule,
]

const modules = [
  PortalHeaderModule,
  PortalFooterModule,
  PortalCookieBannerModule,

  LoadingComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
  ],
})
export class PortalModule { }
