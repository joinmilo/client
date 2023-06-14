import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { EventPageFeatureComponent } from './component/event-page-feature.component';
import { eventPageFeatureStateKey } from './constants/event-page-feature.constants';
import { EventPageFeatureEffects } from './state/event-page-feature.effects';
import { eventPageFeatureReducer } from './state/event-page-feature.reducer';

const components = [
  EventPageFeatureComponent
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  CardModule,
];

const libs = [
  StoreModule.forFeature(eventPageFeatureStateKey, eventPageFeatureReducer),
  EffectsModule.forFeature([EventPageFeatureEffects]),
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
export class PortalEventPageFeatureModule { }
