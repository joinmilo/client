import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { RadioCardGroupComponent } from 'ngx-cinlib/forms/radio-card';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { PageTitleComponent, SubTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { GradientButtonComponent } from 'src/app/shared/widgets/gradient-button/gradient-button.component';
import { NavigatorPortalDetailsLandingComponent } from './navigator-portal-details-landing.component';

const components = [
  NavigatorPortalDetailsLandingComponent,
]

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
];

const libs = [
  GradientButtonComponent,
  IconComponent,
  I18nDirective,
  PageTitleComponent,
  SubTitleComponent,
  RadioCardGroupComponent,
  TranslatablePipe,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class NavigatorPortalDetailsLandingModule { }
