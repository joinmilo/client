import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { TranslatablePipe } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';
import { PortalMenuAccordionComponent } from './components/accordion/portal-menu-accordion.component';
import { PortalMenuOverlayComponent } from './components/overlay/portal-menu-overlay.component';

const components = [  
  PortalMenuAccordionComponent,
  PortalMenuOverlayComponent,
];

const framework = [
  CommonModule,
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
  TranslatablePipe,
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
export class PortalMenuModule { }
