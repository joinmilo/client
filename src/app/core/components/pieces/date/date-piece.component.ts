import { Component, Input } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ScheduleEntity } from './../../../../../schema/schema';

@Component({
  selector: 'app-date-piece',
  templateUrl: './date-piece.component.html',
  styleUrls: ['./date-piece.component.scss']
})
export class DatePieceComponent {

  @Input()
  public date?: Maybe<ScheduleEntity>;

  @Input()
  public dateTime = true;
}
