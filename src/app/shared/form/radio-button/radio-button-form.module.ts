import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { RadioButtonGroupComponent } from './components/radio-button-group/radio-button-group.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';


const components = [
  RadioButtonComponent,
  RadioButtonGroupComponent,
];

const framework = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
];

const modules = [
  CoreModule,
];

const libs = [
  FontAwesomeModule,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class RadioButtonFormModule { }