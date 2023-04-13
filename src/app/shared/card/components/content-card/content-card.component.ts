import { Component, Input, OnInit } from '@angular/core';
import { dataToElement } from 'src/app/core/utils/card.utils';
import { CardData, CardElement, CardEntity } from 'src/app/shared/card/typings/card';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
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
