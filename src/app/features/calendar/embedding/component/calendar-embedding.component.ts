import { Component } from '@angular/core';
import { EventEntity, Maybe } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-calendar-embedding',
  templateUrl: './calendar-embedding.component.html',
  styleUrls: ['./calendar-embedding.component.scss']
})
export class CalendarEmbeddingComponent {
  
  public set events(events: Maybe<Maybe<EventEntity>[]>) {
    this.filteredEvents = events
      ? events.filter(event => !!event?.schedule)
      : [];
  }

  public filteredEvents?: Maybe<EventEntity>[];

  public selectedEvents(events?: Maybe<EventEntity>[]): void {
    this.events = events;
  }

}
