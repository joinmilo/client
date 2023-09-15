import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsSearchComponent } from 'src/app/shared/widgets/analytics/components/search/analytics-search.component';
import { EventAdminDetailsSearchComponent } from './component/event-admin-details-search.component';
import { eventAdminDetailsSearchStateKey } from './constants/event-admin-details-search.constants';
import { EventAdminDetailsSearchEffects } from './state/event-admin-details-search.effects';
import { eventAdminDetailsSearchReducer } from './state/event-admin-details-search.reducer';

const components = [
  EventAdminDetailsSearchComponent,
]

const framework = [
  CommonModule,
];

const modules = [
  AnalyticsSearchComponent,
  CoreModule,
];

const libs = [
  StoreModule.forFeature(eventAdminDetailsSearchStateKey, eventAdminDetailsSearchReducer),
  EffectsModule.forFeature([EventAdminDetailsSearchEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...modules,
  ],
  exports: [...components],
})
export class EventAdminDetailsSearchModule { }
