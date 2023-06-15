import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { PortalMenuModule } from '../menu/portal-menu.module';
import { PortalSearchModule } from '../search/search.module';
import { PortalHeaderBackComponent } from './components/back/portal-header-back.component';
import { PortalHeaderDesktopComponent } from './components/desktop/portal-header-desktop.component';
import { PortalHeaderComponent } from './components/header/portal-header.component';
import { PortalHeaderLanguageComponent } from './components/language/portal-header-language.component';
import { PortalHeaderMobileComponent } from './components/mobile/portal-header-mobile.component';
import { PortalHeaderNotificationsDropdownComponent } from './components/notifications/notifications-dropdown/portal-header-notifications-dropdown.component';
import { PortalHeaderNotificationsComponent } from './components/notifications/notifications/portal-header-notifications.component';
import { PortalHeaderUserComponent } from './components/user/portal-header-user.component';

const components = [
  PortalHeaderComponent,
  PortalHeaderBackComponent,
  PortalHeaderDesktopComponent,
  PortalHeaderLanguageComponent,
  PortalHeaderMobileComponent,
  PortalHeaderNotificationsComponent,
  PortalHeaderNotificationsDropdownComponent,
  PortalHeaderUserComponent,
];

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatBadgeModule,
  MatButtonModule,
  MatDividerModule,
  MatMenuModule,
  MatToolbarModule,
];

const modules = [
  CoreModule,
  PortalMenuModule,
  PortalSearchModule,
];

const libs = [
  FontAwesomeModule,
]

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
