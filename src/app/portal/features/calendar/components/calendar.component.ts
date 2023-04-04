import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';
import { EventEntity } from 'src/schema/schema';
import { CardInput } from '../../../../core/typings/card';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class PortalCalendarComponent implements OnInit {
  display = false;

  @Input()
  public events?: Maybe<EventEntity[]>;

  // CardSliderComponent
  @Input()
  public cards?: Maybe<CardInput[]>;  
 
  dateFilter = (date: Date): boolean => {
    return false;
  }

  ngOnInit(): void {
    this.dateFilter = (date: Date) => {
      if (this.events) {
        for (const event of this.events) {
          for (const schedule of event.schedules!) {
            // console.log('test', schedule?.startDate);
          }
        }
      }
      const day = date.getDay();
      return day === 0 || day === 6;
    }
  }

  test($event: any) {
    console.log($event);
  }

}