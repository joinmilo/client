import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from 'src/app/core/core.module';
import { NotFoundComponent } from './component/not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

const components = [
  NotFoundComponent,
];

const framework = [
  CommonModule,
];

const material = [
  MatButtonModule,
]

const modules = [
  NotFoundRoutingModule,
  CoreModule,
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...material,
    ...modules,
  ],
  exports: [
    ...components,
  ],
})
export class NotFoundModule { }
