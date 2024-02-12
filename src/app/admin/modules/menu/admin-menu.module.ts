import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';
import { AdminMenuAccordionComponent } from './components/accordion/admin-menu-accordion.component';
import { AdminMenuComponent } from './components/admin-menu.component';
import { AdminMenuOverlayComponent } from './components/overlay/admin-menu-overlay.component';
import { AdminMenuService } from './services/admin-menu.service';

const components = [
  AdminMenuComponent,
  AdminMenuAccordionComponent,
  AdminMenuOverlayComponent,
];

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatExpansionModule,
  MatMenuModule,
];

const modules = [
  CoreModule,
];

const libs = [
  IconComponent,
  I18nDirective,
];

const providers = [
  AdminMenuService,
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
  providers: [
    ...providers
  ]
})
export class AdminMenuModule { }
