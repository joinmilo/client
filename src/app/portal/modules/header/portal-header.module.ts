import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { HeaderBackComponent } from 'src/app/shared/layout/header/back/header-back.component';
import { HeaderLanguageComponent } from 'src/app/shared/layout/header/language/header-language.component';
import { HeaderNotificationComponent } from 'src/app/shared/layout/header/notification/header-notification.component';
import { HeaderUserComponent } from 'src/app/shared/layout/header/user/header-user.component';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { IconComponent } from 'src/app/shared/widgets/icon/icon.component';
import { PortalSearchModule } from '../../../shared/pages/search/search.module';
import { PortalMenuModule } from '../menu/portal-menu.module';
import { PortalHeaderDesktopComponent } from './components/desktop/portal-header-desktop.component';
import { PortalHeaderMobileComponent } from './components/mobile/portal-header-mobile.component';
import { PortalHeaderComponent } from './components/portal-header.component';

const components = [
  PortalHeaderComponent,
  PortalHeaderDesktopComponent,
  PortalHeaderMobileComponent,
];

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatDividerModule,
  MatMenuModule,
  MatToolbarModule,
];

const modules = [
  CoreModule,
  HeaderBackComponent,
  HeaderLanguageComponent,
  HeaderNotificationComponent,
  HeaderUserComponent,
  IconComponent,
  MediaWidgetsModule,
  PortalMenuModule,
  PortalSearchModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
  ],
  exports: [
    ...components,
  ],
})
export class PortalHeaderModule { }
