
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { ExternalContentComponent } from './external/external-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

const components = [
  ExternalContentComponent
];

const framework = [
  CommonModule,
  CoreModule,
];

const libs = [
  FontAwesomeModule,
  MatButtonModule,
  MatCheckboxModule,
  FormsModule
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
  ],
  exports: [...components],
})
export class ContentModule { }
