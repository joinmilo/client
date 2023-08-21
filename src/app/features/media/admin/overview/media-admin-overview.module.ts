import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { MediaAdminOverviewComponent } from './component/media-admin-overview.component';
import { MediaFilterModule } from 'src/app/shared/filter/media-filter/media-filter.module';
import { MediaAdminOverviewRoutingModule } from './media-admin-overview-routing.module';
import { mediaAdminOverviewStateKey } from './constants/media-admin-overview.constants';
import { mediaAdminOverviewReducer } from './state/media-portal-overview.reducer';
import { MediaAdminOverviewEffects } from './state/media-portal-overview.effects';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';

const components = [
  MediaAdminOverviewComponent
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
  TableModule,
  TitleModule,
  RadioButtonFormModule
];

const libs = [
  StoreModule.forFeature(mediaAdminOverviewStateKey, mediaAdminOverviewReducer),
  EffectsModule.forFeature([MediaAdminOverviewEffects]),
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
