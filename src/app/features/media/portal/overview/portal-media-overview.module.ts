import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslatablePipe } from 'ngx-cinlib/i18n';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaSliderComponent } from 'ngx-cinlib/media/elements';
import { CoreModule } from 'src/app/core/core.module';
import { MediaFilterModule } from 'src/app/shared/filter/media/media-filter.module';
import { NoDataComponent } from 'src/app/shared/layout/no-data/no-data.component';
import { PortalMediaOverviewCategoryComponent } from './components/category/portal-media-overview-category.component';
import { PortalMediaOverviewComponent } from './components/portal-media-overview.component';
import { portalMediaOverviewStateKey } from './constants/portal-media-overview.constants';
import { PortalMediaOverviewRoutingModule } from './portal-media-overview-routing.module';
import { PortalMediaOverviewEffects } from './state/portal-media-overview.effects';
import { portalMediaOverviewReducer } from './state/portal-media-overview.reducer';

const components = [
  PortalMediaOverviewComponent,
  PortalMediaOverviewCategoryComponent,
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
  PortalMediaOverviewRoutingModule,
  MediaFilterModule,
  NoDataComponent,
];

const libs = [
  StoreModule.forFeature(portalMediaOverviewStateKey, portalMediaOverviewReducer),
  EffectsModule.forFeature([PortalMediaOverviewEffects]),

  MediaSliderComponent,
  PageTitleComponent,
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
export class PortalMediaOverviewModule { }
