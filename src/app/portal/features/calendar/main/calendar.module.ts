import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CalendarModule } from 'src/app/shared/calendar/calendar.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { TitleModule } from 'src/app/shared/title/title.module';
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
  CalendarModule,
  CardModule,
  CalendarPortalRoutingModule,
  TitleModule,
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
export class PortalCalendarModule { }
