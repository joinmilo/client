import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { ArticleAdminFormRoutingModule } from './article-admin-form-routing.module';
import { ArticleAdminFormComponent } from './components/article-admin-form.component';
import { articleAdminFormStateKey } from './constants/article-admin-form.constants';
import { ArticleAdminFormEffects } from './state/article-admin-form.effects';
import { articleAdminFormReducer } from './state/article-admin-form.reducer';

const components = [
  ArticleAdminFormComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
];

const modules = [
  CoreModule,
  ArticleAdminFormRoutingModule,
  TitleModule,
  FormStepperModule,
  GridLayoutModule,
  MatInputModule

];

const libs = [
  StoreModule.forFeature(articleAdminFormStateKey, articleAdminFormReducer),
  EffectsModule.forFeature([ArticleAdminFormEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class ArticleAdminFormModule { }
