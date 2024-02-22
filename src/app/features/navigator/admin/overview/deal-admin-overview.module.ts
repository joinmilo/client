import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { DealFilterModule } from 'src/app/shared/filter/deal/deal-filter.module';
import { DealAdminOverviewComponent } from './component/deal-admin-overview.component';
import { dealAdminOverviewStateKey } from './constants/deal-admin-overview.constants';
import { DealAdminOverviewRoutingModule } from './deal-admin-overview-routing.module';
import { DealAdminOverviewEffects } from './state/deal-portal-overview.effects';
import { dealAdminOverviewReducer } from './state/deal-portal-overview.reducer';

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
];

const libs = [
  StoreModule.forFeature(dealAdminOverviewStateKey, dealAdminOverviewReducer),
  EffectsModule.forFeature([DealAdminOverviewEffects]),

  I18nDirective,
  PageTitleComponent,
  TableComponent
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
