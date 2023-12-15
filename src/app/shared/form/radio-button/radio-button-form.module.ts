import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { IconComponent } from '../../widgets/icon/icon.component';
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
  IconComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class RadioButtonFormModule { }