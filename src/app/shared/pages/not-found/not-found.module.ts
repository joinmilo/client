import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './component/not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

const components = [
  NotFoundComponent,
];

const modules = [
  NotFoundRoutingModule,
]

const framework = [
  CommonModule,
];


@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...modules,
  ],
  exports: [
    ...components,
  ],
})
export class NotFoundModule { }
