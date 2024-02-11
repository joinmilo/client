import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioButtonGroupComponent } from 'ngx-cinlib/forms/radio-button';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { EventFilterModule } from 'src/app/shared/filter/event/event-filter.module';
import { NoDataComponent } from 'src/app/shared/layout/no-data/no-data.component';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { EventCalendarModule } from 'src/app/shared/widgets/event-calendar/event-calendar.module';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
import { PortalEventOverviewCalendarComponent } from './components/calendar/portal-event-overview-calendar.component';
import { PortalEventOverviewCategoryComponent } from './components/category/portal-event-overview-category.component';
import { PortalEventOverviewMapComponent } from './components/map/portal-event-overview-map.component';
import { PortalEventOverviewComponent } from './components/portal-event-overview.component';
import { PortalEventOverviewTableComponent } from './components/table/portal-event-overview-table.component';
import { portalEventOverviewStateKey } from './constants/portal-event-overview.constants';
import { PortalEventOverviewRoutingModule } from './portal-event-overview-routing.module';
import { PortalEventOverviewEffects } from './state/portal-event-overview.effects';
import { portalEventOverviewReducer } from './state/portal-event-overview.reducer';

const components = [
  PortalEventOverviewComponent,
  PortalEventOverviewCalendarComponent,
  PortalEventOverviewCategoryComponent,
  PortalEventOverviewMapComponent,
  PortalEventOverviewTableComponent,
];

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
  CardModule,
  CardSliderComponent,
  EventCalendarModule,
  EventFilterModule,
  MapModule,
  PortalEventOverviewRoutingModule,
  NoDataComponent,
];

const libs = [
  StoreModule.forFeature(portalEventOverviewStateKey, portalEventOverviewReducer),
  EffectsModule.forFeature([PortalEventOverviewEffects]),
  
  RadioButtonGroupComponent,
  PageTitleComponent,
  TableComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class PortalEventOverviewModule { }
