import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { PortalCookieBannerComponent } from './components/portal-cookie-banner.component';
import { CookieBannerComponent } from './components/snackbar/cookie-banner.component';

const components = [
  PortalCookieBannerComponent,
  CookieBannerComponent
];

const framework = [
  CommonModule,
];

const materials = [
  MatSnackBarModule,
  MatButtonModule,
];

const modules = [
  CoreModule,
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
