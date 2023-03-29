import { Component, Input } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';

@Component({
  selector: 'app-date-piece',
  templateUrl: './date-piece.component.html',
  styleUrls: ['./date-piece.component.scss']
})
export class DatePieceComponent {

  @Input()
  public date?: Maybe<string>;

  @Input()
  public dateTime = true;

  @Input()
  public label = 'date';
}
