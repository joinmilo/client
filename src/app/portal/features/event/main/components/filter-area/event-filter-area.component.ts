import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EventDisplayType } from 'src/app/core/typings/display-type';
import { RadioInput } from 'src/app/core/typings/radio-input';
import { EventActions } from '../../state/event.actions';
import { selectSponsoredEvent } from '../../state/event.selectors';

@Component({
  selector: 'app-event-filter-area',
  templateUrl: './event-filter-area.component.html',
  styleUrls: ['./event-filter-area.component.scss']
})
export class EventFilterAreaComponent {

  public sponsored = this.store.select(selectSponsoredEvent);

  public inputs: RadioInput[] = [
    {
      icon: ['fas', 'shapes'],
      label: 'category',
      value: EventDisplayType.Category
    },
    {
      icon: ['fas', 'list'],
      label: 'list',
      value: EventDisplayType.List
    },
    {
      icon: ['fas', 'calendar'],
      label: 'calendar',
      value: EventDisplayType.Calendar
    },
    {
      icon: ['fas', 'map-location-dot'],
      label: 'mapview',
      value: EventDisplayType.Map
    },
  ];

  public initValue = EventDisplayType.Category;
  
  constructor(
    private store: Store, 
  ) {
    this.store.dispatch(EventActions.getSponsoredEvent());
    this.store.dispatch(EventActions.overviewDisplayChanged(this.initValue));
  }

  public valueChanged(displayType: EventDisplayType) {
    this.store.dispatch(EventActions.overviewDisplayChanged(displayType));
  }

}