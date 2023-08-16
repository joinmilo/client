import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { CookieComponent } from './cookie.component';

const components = [
  CookieComponent
];

// const directives = [
// ]

const framework = [
  CommonModule,
  
];

const materials = [
  MatButtonModule,
  MatDialogModule,
  MatSlideToggleModule,
];

const modules = [
  CoreModule,
  RouterModule
];

const libs = [
  FontAwesomeModule,
];

@NgModule({
  declarations: [
    ...components,
    // ...directives,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components,
    // ...directives,
  ],
})
export class CookieModule { }
