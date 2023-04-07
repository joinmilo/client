import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Month } from '../typings/month';
import { dateToMonth } from '../utils/date.utils';

@Injectable()
export class CalendarService {

  private month = new Subject<Month>();

  public selectedMonth(): Observable<Month> {
    return this.month.asObservable();
  }

  public select(date: Date) {
    this.month.next(dateToMonth(date));
  }

}
