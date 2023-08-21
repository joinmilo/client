import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { DealAdminOverviewComponent } from './component/deal-admin-overview.component';
import { DealFilterModule } from 'src/app/shared/filter/deal-filter/deal-filter.module';
import { DealAdminOverviewRoutingModule } from './deal-admin-overview-routing.module';
import { dealAdminOverviewReducer } from './state/survey-portal-overview.reducer';
import { dealAdminOverviewStateKey } from './constants/deal-admin-overview.constants';
import { DealAdminOverviewEffects } from './state/survey-portal-overview.effects';

const components = [
  DealAdminOverviewComponent
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
  DealFilterModule,
  DealAdminOverviewRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(dealAdminOverviewStateKey, dealAdminOverviewReducer),
  EffectsModule.forFeature([DealAdminOverviewEffects]),
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
export class DealAdminOverviewModule { }
