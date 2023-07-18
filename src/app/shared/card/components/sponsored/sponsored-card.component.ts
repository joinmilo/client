import { Component, Input, OnInit } from '@angular/core';
import { dataToElement } from 'src/app/shared/card/utils/card.utils';
import { Maybe } from 'src/schema/schema';
import { CardData, CardElement, CardEntity } from '../../typings/card';

@Component({
  selector: 'app-sponsored-card',
  templateUrl: './sponsored-card.component.html',
  styleUrls: ['./sponsored-card.component.scss'],
})
export class SponsoredCardComponent implements OnInit {

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
