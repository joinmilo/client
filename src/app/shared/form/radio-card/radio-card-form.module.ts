import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from '../../layout/title/title.module';
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
  TitleModule
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
export class RadioCardFormModule { }