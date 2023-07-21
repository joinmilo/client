import { Component, Input } from '@angular/core';
import { CardElement } from 'src/app/shared/card/typings/card';
import { Maybe } from 'src/schema/schema';

@Component({
  selector: 'app-card-actions',
  templateUrl: './card-actions.component.html',
  styleUrls: ['./card-actions.component.scss']
})
export class CardActionsComponent {

  @Input()
  public element?: Maybe<CardElement>;

}
