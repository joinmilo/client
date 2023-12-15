import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { CoreModule } from 'src/app/core/core.module';
import { IconComponent } from 'src/app/shared/widgets/icon/icon.component';
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
  IconComponent,
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
export class PortalMenuModule { }
