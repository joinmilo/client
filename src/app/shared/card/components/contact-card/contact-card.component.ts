import { Component, Input, OnInit } from '@angular/core';
import { CardData, CardElement, CardEntity } from '../../typings/card';
import { dataToElement } from '../../utils/card.utils';
@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: [
    './contact-card.component.scss',
    '../card.scss'
  ]
})
export class ContactCardComponent implements OnInit {

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
