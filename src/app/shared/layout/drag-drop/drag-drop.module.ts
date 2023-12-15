import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from 'src/app/core/core.module';
import { IconComponent } from '../../widgets/icons/icon.component';
import { DragDropComponent } from './components/drag-drop.component';
import { DragDropElementComponent } from './components/element/drag-drop-element.component';
import { DragDropDirective } from './directive/drag-drop.directive';

const components = [
  DragDropComponent,
  DragDropElementComponent,
];

const directives = [
  DragDropDirective,
]

const framework = [
  CommonModule,
  NgComponentOutlet,
];

const materials = [
  DragDropModule,
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
  CommonModule,
  IconComponent,
];

@NgModule({
  declarations: [
    ...components,
    ...directives,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
  ],
  exports: [
    ...components,
    ...directives,
  ],
})
export class DragAndDropModule { }
