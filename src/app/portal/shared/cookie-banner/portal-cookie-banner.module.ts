import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { CookieBannerComponent } from './components/banner/cookie-banner.component';
import { PortalCookieBannerComponent } from './components/portal-cookie-banner.component';
import { CookieSettingsComponent } from './components/settings/cookie-settings.component';

const components = [
  PortalCookieBannerComponent,
  CookieBannerComponent,
  CookieSettingsComponent,
];

const framework = [
  CommonModule,
  RouterModule
];

const materials = [
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSnackBarModule,
];

const modules = [
  CoreModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
]

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  imports: [
    // ...features,
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
})
export class PortalCookieBannerModule { }
