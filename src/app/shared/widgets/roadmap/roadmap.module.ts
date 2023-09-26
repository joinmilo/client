import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from '../../layout/title/title.module';
import { CardModule } from '../card/card.module';
import { RoadmapComponent } from './roadmap.component';

const components = [
  RoadmapComponent,

];

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
];

const modules = [
  CoreModule,
  CardModule,
  TitleModule
];

const libs = [
  FontAwesomeModule,
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
export class RoadmapModule { }
