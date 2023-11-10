import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { MediaFilterModule } from 'src/app/shared/filter/media/media-filter.module';
import { NoDataComponent } from 'src/app/shared/layout/no-data/no-data.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
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
  MediaWidgetsModule,
  MediaFilterModule,
  NoDataComponent,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(portalMediaOverviewStateKey, portalMediaOverviewReducer),
  EffectsModule.forFeature([PortalMediaOverviewEffects]),
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
