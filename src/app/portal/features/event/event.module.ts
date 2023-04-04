import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { PortalCommonModule } from '../../common/common.module';
import { eventFeatureKey } from './constants/event.constant';
import { EventPortalRoutingModule } from './event-routing.module';
import { EventDetailsComponent } from './pages/details/event-details.component';
import { EventEffects } from './state/event.effects';
import { eventReducer } from './state/event.reducer';

const components = [
  EventDetailsComponent,];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  EventPortalRoutingModule,
  PortalCommonModule,
];

const libs = [
  StoreModule.forFeature(eventFeatureKey, eventReducer),
  EffectsModule.forFeature([EventEffects]),
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
export class EventPortalModule { }
