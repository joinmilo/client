import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { monthPeriod } from '../../../core/utils/date.utils';
import { Period } from '../typings/month';

@Injectable()
export class CalendarService {

  private month = new Subject<Period>();

  public selectedMonth(): Observable<Period> {
    return this.month.asObservable();
  }

  public select(date: Date) {
    this.month.next(monthPeriod(date) as Period);
  }

}
