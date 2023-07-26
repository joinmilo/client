import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from 'src/schema/schema';
import { CardData, CardElement, CardEntity } from '../../typings/card';
import { dataToElement } from '../../utils/card.utils';
@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  @Input()
  public entity?: Maybe<CardEntity>;

  @Input()
  public data?: Maybe<CardData>;

  public element?: Maybe<CardElement>;

  public ngOnInit(): void {
    if (this.entity && this.data) {
      this.element = dataToElement(this.entity, this.data);
    }
    console.log(this.element)
  }
}
