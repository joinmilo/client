import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CalendarModule } from 'src/app/shared/calendar/calendar.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalCalendarComponent } from './components/portal-calendar.component';
import { portalCalendarStateKey } from './constants/portal-calendar.constant';
import { PortalCalendarRoutingModule } from './portal-calendar-routing.module';
import { PortalCalendarApiService } from './services/calendar-api.service';
import { PortalCalendarEffects } from './state/portal-calendar.effects';
import { portalCalendarReducer } from './state/portal-calendar.reducer';

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
  PortalCalendarRoutingModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(portalCalendarStateKey, portalCalendarReducer),
  EffectsModule.forFeature([PortalCalendarEffects]),
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
export class PortalCalendarModule { }
