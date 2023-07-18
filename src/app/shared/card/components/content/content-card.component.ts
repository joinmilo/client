import { Component, Input, OnInit } from '@angular/core';
import { CardData, CardElement, CardEntity } from 'src/app/shared/card/typings/card';
import { Maybe } from 'src/schema/schema';
import { dataToElement } from '../../utils/card.utils';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input()
  public entity?: Maybe<CardEntity>;

  @Input()
  public data?: Maybe<CardData>;

  public element?: Maybe<CardElement>;

  public ngOnInit(): void {
    if (this.entity && this.data) {
      this.element = dataToElement(this.entity, this.data);
    }
  }
}
