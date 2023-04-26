import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CalendarModule } from 'src/app/shared/calendar/calendar.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalCalendarApiService } from '../main/services/calendar-api.service';
import { CalendarPageFeatureComponent } from './component/calendar-page-feature.component';
import { calendarPageFeatureStateKey } from './constants/calendar-page-feature.constant';
import { CalendarPageFeatureEffects } from './state/calendar-page-feature.effects';
import { calendarPageFeatureReducer } from './state/calendar-page-feature.reducer';

const components = [
  CalendarPageFeatureComponent
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
  TitleModule,
];

const libs = [
  StoreModule.forFeature(calendarPageFeatureStateKey, calendarPageFeatureReducer),
  EffectsModule.forFeature([CalendarPageFeatureEffects]),
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
    PortalCalendarApiService,
  ]
})
export class PortalCalendarPageFeatureModule { }
