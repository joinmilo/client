import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { EventFilterModule } from 'src/app/shared/event-filter/event-filter.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalEventCategoryViewComponent } from './components/category-view/portal-event-category-view.component';
import { PortalEventFilterAreaComponent } from './components/filter-area/portal-event-filter-area.component';
import { PortalEventOverviewComponent } from './components/overview/portal-event-overview.component';
import { PortalEventTableViewComponent } from './components/table-view/portal-event-table-view.component';
import { portalEventOverviewStateKey } from './constants/portal-event-overview.constant';
import { PortalEventOverviewRoutingModule } from './portal-event-overview-routing.module';
import { QueryRouterService } from './services/query-router.service';
import { PortalEventOverviewEffects } from './state/portal-event-overview.effects';
import { portalEventOverviewReducer } from './state/portal-event-overview.reducer';

const components = [
  PortalEventCategoryViewComponent,
  PortalEventFilterAreaComponent,
  PortalEventTableViewComponent,
  PortalEventOverviewComponent,
];

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatSelectModule,
]

const modules = [
  CoreModule,
  CardModule,
  EventFilterModule,
  PortalEventOverviewRoutingModule,
  FormModule,
  TableModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalEventOverviewStateKey, portalEventOverviewReducer),
  EffectsModule.forFeature([PortalEventOverviewEffects]),
];

const providers = [
  QueryRouterService
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
  providers: [
    ...providers
  ]
})
export class PortalEventOverviewModule { }
