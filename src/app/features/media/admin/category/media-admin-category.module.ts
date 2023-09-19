import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { MediaFilterModule } from 'src/app/shared/filter/media/media-filter.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { MediaAdminCategoryComponent } from './component/media-admin-category.component';
import { mediaAdminCategoryStateKey } from './constants/media-admin-category.constants';
import { MediaAdminCategoryRoutingModule } from './media-admin-category-routing.module';
import { MediaAdminCategoryEffects } from './state/media-admin-category.effects';
import { mediaAdminCategoryReducer } from './state/media-admin-category.reducer';

const components = [
  MediaAdminCategoryComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
  MediaFilterModule,
  MediaAdminCategoryRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(mediaAdminCategoryStateKey, mediaAdminCategoryReducer),
  EffectsModule.forFeature([MediaAdminCategoryEffects]),
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
export class MediaAdminCategoryModule { }
