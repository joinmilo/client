import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { EventCategoryViewComponent } from './components/category-view/event-category-view.component';
import { EventFilterAreaComponent } from './components/filter-area/event-filter-area.component';
import { EventOverviewComponent } from './components/overview/event-overview.component';
import { EventTableViewComponent } from './components/table-view/event-table-view.component';
import { portalEventOverviewStateKey } from './constants/event-overview.constant';
import { PortalEventOverviewRoutingModule } from './event-overview-routing.module';
import { PortalEventOverviewEffects } from './state/event-overview.effects';
import { portalEventOverviewReducer } from './state/event-overview.reducer';

const components = [
  EventCategoryViewComponent,
  EventFilterAreaComponent,
  EventTableViewComponent,
  EventOverviewComponent,
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  CardModule,
  PortalEventOverviewRoutingModule,
  FormModule,
  TableModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalEventOverviewStateKey, portalEventOverviewReducer),
  EffectsModule.forFeature([PortalEventOverviewEffects]),
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class PortalEventOverviewModule { }
