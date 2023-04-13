import { Component, Input, OnInit } from '@angular/core';
import { dataToElement } from 'src/app/core/utils/card.utils';
import { CardData, CardElement, CardEntity } from '../../../typings/card';

@Component({
  selector: 'app-sponsored-card',
  templateUrl: './sponsored-card.component.html',
  styleUrls: ['./sponsored-card.component.scss']
})
export class SponsoredCardComponent implements OnInit {

  @Input()
  public entity?: CardEntity;

  @Input()
  public data?: CardData;

  public element?: CardElement;

  public ngOnInit(): void {
    if (this.entity && this.data) {
      this.element = dataToElement(this.entity, this.data);
    }
  }
  
}
