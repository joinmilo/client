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
import { RichtextEditorFormComponent } from 'ngx-cinlib/forms/richtext';
import { CoreModule } from 'src/app/core/core.module';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaFormModule } from 'src/app/shared/media/modules/form/media-form.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
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
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSelectModule
];

const modules = [
  ArticleAdminFormRoutingModule,
  CoreModule,
  FormStepperModule,
  GridLayoutModule,
  MediaFormModule,
  MediaWidgetsModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(articleAdminFormStateKey, articleAdminFormReducer),
  EffectsModule.forFeature([ArticleAdminFormEffects]),
  
  RichtextEditorFormComponent,
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
