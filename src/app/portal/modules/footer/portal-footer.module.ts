import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslatablePipe } from 'ngx-cinlib/i18n';
import { CoreModule } from 'src/app/core/core.module';
import { FooterAppStoreComponent } from 'src/app/shared/layout/footer/appstore/footer-appstore.component';
import { FooterSocialMediaComponent } from 'src/app/shared/layout/footer/socialmedia/footer-socialmedia.component';
import { PortalMenuModule } from '../menu/portal-menu.module';
import { PortalFooterDesktopComponent } from './components/desktop/portal-footer-desktop.component';
import { PortalFooterMobileComponent } from './components/mobile/portal-footer-mobile.component';
import { PortalFooterComponent } from './components/portal-footer.component';

const components = [
  PortalFooterComponent,
  PortalFooterDesktopComponent,
  PortalFooterMobileComponent,
];

const framework = [
  CommonModule,
];

const libs = [
  TranslatablePipe,
]

const modules = [
  CoreModule,
  FooterAppStoreComponent,
  FooterSocialMediaComponent,
  PortalMenuModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...libs,
    ...modules,
  ],
  exports: [
    ...components,
  ],
})
export class PortalFooterModule { }
