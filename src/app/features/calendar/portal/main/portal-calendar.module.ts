import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { EventFilterModule } from 'src/app/shared/filter/event/event-filter.module';
import { EventCalendarModule } from 'src/app/shared/widgets/event-calendar/event-calendar.module';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
import { PortalCalendarComponent } from './component/portal-calendar.component';
import { PortalCalendarRoutingModule } from './portal-calendar-routing.module';

const components = [
  PortalCalendarComponent
];

const framework = [
  CommonModule,
];

const libs = [
  PageTitleComponent,
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
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class PortalCalendarModule {

}
