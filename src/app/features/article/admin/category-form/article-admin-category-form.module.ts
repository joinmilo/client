import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IconFormComponent } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
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
  FormStepperModule,
  GridLayoutModule,
  TitleModule,
];

const libs = [
  IconFormComponent,
  EffectsModule.forFeature([ArticleAdminCategoryFormEffects]),
  StoreModule.forFeature(articleAdminCategoryFormStateKey, articleAdminFormReducer),
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
export class ArticleAdminCategoryFormModule { }
