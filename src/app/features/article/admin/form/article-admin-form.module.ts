import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RichtextEditorFormComponent } from 'ngx-cinlib/forms/richtext';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaFormComponent } from 'ngx-cinlib/media/forms';
import { CoreModule } from 'src/app/core/core.module';
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
  ReactiveFormsModule,
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
  ArticleAdminFormRoutingModule,
  CoreModule,
];

const libs = [
  StoreModule.forFeature(articleAdminFormStateKey, articleAdminFormReducer),
  EffectsModule.forFeature([ArticleAdminFormEffects]),
  
  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
  I18nDirective,
  MediaFormComponent,
  PageTitleComponent,
  RichtextEditorFormComponent,
  TranslatablePipe,
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
