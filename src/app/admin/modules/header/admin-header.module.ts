import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { HeaderBackComponent } from 'src/app/shared/layout/header/back/header-back.component';
import { HeaderLanguageComponent } from 'src/app/shared/layout/header/language/header-language.component';
import { HeaderNotificationComponent } from 'src/app/shared/layout/header/notification/header-notification.component';
import { HeaderUserComponent } from 'src/app/shared/layout/header/user/header-user.component';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { AdminHeaderComponent } from './components/admin-header.component';
import { AdminHeaderDesktopComponent } from './components/desktop/admin-header-desktop.component';
import { AdminHeaderMobileComponent } from './components/mobile/admin-header-mobile.component';

const components = [
  AdminHeaderComponent,
  AdminHeaderDesktopComponent,
  AdminHeaderMobileComponent,
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
  MediaWidgetsModule,
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
export class AdminHeaderModule { }
