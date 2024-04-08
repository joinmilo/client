import { Component } from '@angular/core';
import { EventEntity, Maybe } from 'src/app/core/api/generated/schema';
import { EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';


@Component({
  selector: 'app-portal-calendar',
  templateUrl: './portal-calendar.component.html',
  styleUrls: ['./portal-calendar.component.scss']
})
export class PortalCalendarComponent {

  public events?: Maybe<EventEntity>[];
  
  public params?: EventFilterQueryParams;
  
  public title?: string;

  filterEventsWithSchedule(events: Maybe<EventEntity>[] | undefined): Maybe<EventEntity>[] {
    if (!events) {
      return [];
    }
    return events.filter(event => !!event?.schedule);
  }

}