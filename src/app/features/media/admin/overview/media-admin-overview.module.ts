
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaSliderComponent } from 'ngx-cinlib/media/elements';
import { CoreModule } from 'src/app/core/core.module';
import { MediaFilterModule } from 'src/app/shared/filter/media/media-filter.module';
import { NoDataComponent } from 'src/app/shared/layout/no-data/no-data.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { MediaAdminOverviewCategoryComponent } from './components/category/media-admin-overview-category.component';
import { MediaAdminOverviewComponent } from './components/media-admin-overview.component';
import { mediaAdminOverviewStateKey } from './constants/media-admin-overview.constants';
import { MediaAdminOverviewRoutingModule } from './media-admin-overview-routing.module';
import { MediaAdminOverviewEffects } from './state/media-admin-overview.effects';
import { mediaAdminOverviewReducer } from './state/media-admin-overview.reducer';


const components = [
  MediaAdminOverviewCategoryComponent,
  MediaAdminOverviewComponent,
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
  MediaAdminOverviewRoutingModule,
  NoDataComponent,
  TableModule,
];

const libs = [
  StoreModule.forFeature(mediaAdminOverviewStateKey, mediaAdminOverviewReducer),
  EffectsModule.forFeature([MediaAdminOverviewEffects]),

  MediaSliderComponent,
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
export class MediaAdminOverviewModule { }
