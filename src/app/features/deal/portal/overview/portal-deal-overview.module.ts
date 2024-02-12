import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioButtonGroupComponent } from 'ngx-cinlib/forms/radio-button';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { DealFilterModule } from 'src/app/shared/filter/deal/deal-filter.module';
import { NoDataComponent } from 'src/app/shared/layout/no-data/no-data.component';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
import { PortalDealOverviewCategoryComponent } from './components/category/portal-deal-overview-category.component';
import { PortalDealOverviewMapComponent } from './components/map/portal-deal-overview-map.component';
import { PortalDealOverviewComponent } from './components/portal-deal-overview.component';
import { PortalDealOverviewTableComponent } from './components/table/portal-deal-overview-table.component';
import { portalDealOverviewStateKey } from './constants/portal-deal-overview.constants';
import { PortalDealOverviewRoutingModule } from './portal-deal-overview-routing.module';
import { PortalDealOverviewEffects } from './state/portal-deal-overview.effects';
import { portalDealOverviewReducer } from './state/portal-deal-overview.reducer';

const components = [
  PortalDealOverviewComponent,
  PortalDealOverviewCategoryComponent,
  PortalDealOverviewMapComponent,
  PortalDealOverviewTableComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CardModule,
  CardSliderComponent,
  CoreModule,
  DealFilterModule,
  MapModule,
  NoDataComponent,
  PortalDealOverviewRoutingModule,
];

const libs = [
  StoreModule.forFeature(portalDealOverviewStateKey, portalDealOverviewReducer),
  EffectsModule.forFeature([PortalDealOverviewEffects]),

  I18nDirective,
  PageTitleComponent,
  RadioButtonGroupComponent,
  TableComponent,
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
export class PortalDealOverviewModule { }
