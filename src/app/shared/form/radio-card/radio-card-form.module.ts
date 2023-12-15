import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from '../../layout/title/title.module';
import { IconComponent } from '../../widgets/icon/icon.component';
import { RadioCardGroupComponent } from './components/radio-card-group/radio-card-group.component';
import { RadioCardComponent } from './components/radio-card/radio-card.component';

const components = [
  RadioCardComponent,
  RadioCardGroupComponent,
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
  TitleModule
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
export class RadioCardFormModule { }