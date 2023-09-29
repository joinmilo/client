import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CkEditorFormComponent } from 'src/app/shared/form/ck-editor/ck-editor-form.component';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaModule } from 'src/app/shared/media/media.module';
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
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSelectModule
];

const modules = [
  CoreModule,
  ArticleAdminCategoryFormRoutingModule,
  TitleModule,
  FormStepperModule,
  GridLayoutModule,
  CkEditorFormComponent,
  MediaModule

];

const libs = [
  StoreModule.forFeature(articleAdminCategoryFormStateKey, articleAdminFormReducer),
  EffectsModule.forFeature([ArticleAdminCategoryFormEffects]),
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
