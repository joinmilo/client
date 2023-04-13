import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { PortalCommonModule } from 'src/app/portal/common/common.module';
import { CalendarApiService } from '../common/services/calendar-api.service';
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
  PortalCommonModule,
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
    CalendarApiService,
  ]
})
export class CalendarPortalPageFeatureModule { }
