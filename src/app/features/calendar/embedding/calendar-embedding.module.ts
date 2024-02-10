import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SubTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { EventCalendarModule } from 'src/app/shared/widgets/event-calendar/event-calendar.module';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
import { CalendarEmbeddingComponent } from './component/calendar-embedding.component';

const components = [
  CalendarEmbeddingComponent
];

const framework = [
  CommonModule,
];

const libs = [
  SubTitleComponent,
]

const materials = [
  MatCardModule,
];

const modules = [
  CoreModule,
  CardSliderComponent,
  EventCalendarModule,
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
export class CalendarEmbeddingModule { }
