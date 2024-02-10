import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { IconFormComponent } from 'ngx-cinlib/icons';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { ArticleAdminCategoryFormRoutingModule } from './article-admin-category-form-routing.module';
import { ArticleAdminCategoryFormComponent } from './components/article-admin-category-form.component';
import { articleAdminCategoryFormStateKey } from './constants/article-admin-category-form.constants';
import { ArticleAdminCategoryFormEffects } from './state/article-admin-category-form.effects';
import { articleAdminFormReducer } from './state/article-admin-category-form.reducer';

const components = [
  ArticleAdminCategoryFormComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

const modules = [
  ArticleAdminCategoryFormRoutingModule,
  CoreModule,
];

const libs = [
  EffectsModule.forFeature([ArticleAdminCategoryFormEffects]),
  StoreModule.forFeature(articleAdminCategoryFormStateKey, articleAdminFormReducer),

  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
  IconFormComponent,
  PageTitleComponent,
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [
    ...components
  ],
})
export class ArticleAdminCategoryFormModule { }
