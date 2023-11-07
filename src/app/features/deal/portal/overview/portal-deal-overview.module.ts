import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DealFilterModule } from 'src/app/shared/filter/deal/deal-filter.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { NoDataComponent } from 'src/app/shared/layout/no-data/no-data.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { PortalDealOverviewCategoryComponent } from './components/category/portal-deal-overview-category.component';
import { PortalDealOverviewEmptyComponent } from './components/empty/portal-deal-overview-empty.component';
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
  PortalDealOverviewEmptyComponent,
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
  PortalDealOverviewRoutingModule,
  RadioButtonFormModule,
  TableModule,
  TitleModule,
  NoDataComponent
];

const libs = [
  StoreModule.forFeature(portalDealOverviewStateKey, portalDealOverviewReducer),
  EffectsModule.forFeature([PortalDealOverviewEffects]),
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
