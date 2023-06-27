import { Component } from '@angular/core';
import { EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';
import { EventEntity, Maybe } from 'src/schema/schema';


@Component({
  selector: 'app-portal-calendar',
  templateUrl: './portal-calendar.component.html',
  styleUrls: ['./portal-calendar.component.scss']
})
export class PortalCalendarComponent {

  public events?: Maybe<EventEntity>[];
  
  public params?: EventFilterQueryParams;
  
  public title?: string;

}