import { Component } from '@angular/core';
import { EventEntity, Maybe } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-calendar-embedding',
  templateUrl: './calendar-embedding.component.html',
  styleUrls: ['./calendar-embedding.component.scss']
})
export class CalendarEmbeddingComponent {
  
  public events?: Maybe<EventEntity>[];

  public selectedEvents(events?: Maybe<EventEntity>[]): void {
    this.events = events;
  }

  filterEventsWithSchedule(events: Maybe<EventEntity>[] | undefined): Maybe<EventEntity>[] {
    if (!events) {
      return [];
    }
    return events.filter(event => !!event?.schedule);
  }

}
