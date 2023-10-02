import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EventEntity, Maybe } from 'src/app/core/api/generated/schema';
import { selectRawParams } from '../../state/portal-event-overview.selectors';

@Component({
  selector: 'app-portal-event-overview-calendar',
  templateUrl: './portal-event-overview-calendar.component.html',
  styleUrls: ['./portal-event-overview-calendar.component.scss']
})
export class PortalEventOverviewCalendarComponent {

  public events?: Maybe<EventEntity>[];

  public params = this.store.select(selectRawParams);

  public title?: string;
  
  constructor(
    private store: Store,
  ) { }

}