import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from 'src/app/core/core.module';
import { EventCalendarModule } from 'src/app/shared/event-calendar/event-calendar.module';
import { EventFilterModule } from 'src/app/shared/filter/event-filter/event-filter.module';
import { CardSliderComponent } from 'src/app/shared/sliders/card-slider/card-slider.component';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalCalendarComponent } from './component/portal-calendar.component';
import { PortalCalendarRoutingModule } from './portal-calendar-routing.module';

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
  CardSliderComponent,
  EventCalendarModule,
  EventFilterModule,
  PortalCalendarRoutingModule,
  TitleModule,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class PortalCalendarModule { }
