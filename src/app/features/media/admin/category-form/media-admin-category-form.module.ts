import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
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
];

const materials = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

const modules = [
  CoreModule,
  MediaAdminCategoryFormRoutingModule,
  TitleModule,
  FormStepperModule,
  GridLayoutModule,
];

const libs = [
  StoreModule.forFeature(mediaAdminCategoryFormStateKey, mediaAdminFormReducer),
  EffectsModule.forFeature([MediaAdminCategoryFormEffects]),
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
