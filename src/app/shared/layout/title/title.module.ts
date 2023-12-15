import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { IconComponent } from '../../widgets/icons/icon.component';
import { DetailsTitleComponent } from './components/details-title/details-title.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { SubTitleComponent } from './components/sub-title/sub-title.component';


const components = [
  PageTitleComponent,
  SubTitleComponent,
  DetailsTitleComponent,
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  IconComponent,
  RouterModule,
  MatButtonModule
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...modules,
  ],
  exports: [...components],
})
export class TitleModule { }