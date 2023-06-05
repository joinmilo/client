import { Component, Input, OnInit } from '@angular/core';
import { CardData, CardElement, CardEntity } from 'src/app/shared/card/typings/card';
import { dataToElement } from '../../utils/card.utils';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: [
    './content-card.component.scss',
    '../card.scss',
  ],
})
export class ContentCardComponent implements OnInit {

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
