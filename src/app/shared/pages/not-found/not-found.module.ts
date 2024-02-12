import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { CoreModule } from 'src/app/core/core.module';
import { NotFoundComponent } from './component/not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

const components = [
  NotFoundComponent,
];

const framework = [
  CommonModule,
];

const libs = [
  I18nDirective,
]

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
    ...libs,
    ...material,
    ...modules,
  ],
  exports: [
    ...components,
  ],
})
export class NotFoundModule { }
