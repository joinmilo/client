import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { IconComponent } from 'ngx-cinlib/icons';
import { MediaAvatarComponent } from 'ngx-cinlib/media/elements';
import { CoreModule } from 'src/app/core/core.module';
import { HeaderBackComponent } from 'src/app/shared/layout/header/back/header-back.component';
import { HeaderLanguageComponent } from 'src/app/shared/layout/header/language/header-language.component';
import { HeaderNotificationComponent } from 'src/app/shared/layout/header/notification/header-notification.component';
import { HeaderUserComponent } from 'src/app/shared/layout/header/user/header-user.component';
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
  PortalMenuModule,
  PortalSearchModule,
];

const libs = [
  IconComponent,
  MediaAvatarComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components,
  ],
})
export class PortalHeaderModule { }
