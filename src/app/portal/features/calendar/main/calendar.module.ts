import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CalendarApiService } from '../common/services/calendar-api.service';
import { CalendarPortalRoutingModule } from './calendar-routing.module';
import { PortalCalendarComponent } from './components/portal-calendar.component';
import { calendarStateKey } from './constants/calendar.constant';
import { CalendarEffects } from './state/calendar.effects';
import { calendarReducer } from './state/calendar.reducer';

const components = [
  PortalCalendarComponent
];

const framework = [
  CommonModule,
];

const materials = [
  MatCardModule,
];

const modules = [
  CoreModule,
  CalendarPortalRoutingModule,
];

const libs = [
  StoreModule.forFeature(calendarStateKey, calendarReducer),
  EffectsModule.forFeature([CalendarEffects]),
]

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
    CalendarApiService,
  ]
})
export class CalendarPortalModule { }
