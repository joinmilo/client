import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CalendarComponent } from 'ngx-cinlib/calendar';
import { CoreModule } from 'src/app/core/core.module';
import { EventCalendarComponent } from './component/event-calendar.component';
import { eventCalendarStateKey } from './constants/event-calendar.constants';
import { EventCalendarEffects } from './state/event-calendar.effects';
import { eventCalendarReducer } from './state/event-calendar.reducer';

const components = [
  EventCalendarComponent
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
];

const libs = [
  StoreModule.forFeature(eventCalendarStateKey, eventCalendarReducer),
  EffectsModule.forFeature([EventCalendarEffects]),

  CalendarComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class EventCalendarModule { }