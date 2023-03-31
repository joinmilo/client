import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoreModule } from 'src/app/core/core.module';
import { ArticlePortalRoutingModule } from './article-routing.module';

const framework = [
  CommonModule,
];

const materials = [
  MatToolbarModule,
];

const modules = [
  ArticlePortalRoutingModule,
  CoreModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...framework,
    ...materials,
    ...modules,
  ],
})
export class ArticlePortalModule { }
