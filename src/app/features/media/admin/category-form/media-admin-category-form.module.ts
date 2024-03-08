import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { MediaAdminCategoryFormComponent } from './components/media-admin-category-form.component';
import { mediaAdminCategoryFormStateKey } from './constants/media-admin-category-form.constants';
import { MediaAdminCategoryFormRoutingModule } from './media-admin-category-form-routing.module';
import { MediaAdminCategoryFormEffects } from './state/media-admin-category-form.effects';
import { mediaAdminFormReducer } from './state/media-admin-category-form.reducer';


const components = [
  MediaAdminCategoryFormComponent
]

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

const modules = [
  CoreModule,
  MediaAdminCategoryFormRoutingModule,
];

const libs = [
  StoreModule.forFeature(mediaAdminCategoryFormStateKey, mediaAdminFormReducer),
  EffectsModule.forFeature([MediaAdminCategoryFormEffects]),

  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
  I18nDirective,
  PageTitleComponent,
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
export class MediaAdminCategoryFormModule { }
