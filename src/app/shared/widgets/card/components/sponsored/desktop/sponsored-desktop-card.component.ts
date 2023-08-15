import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dataToElement } from 'src/app/shared/widgets/card/utils/card.utils';
import { Maybe } from 'src/schema/schema';
import { CardActionInput, CardActionOutput, CardData, CardElement, CardEntity } from '../../../typings/card';

@Component({
  selector: 'app-sponsored-desktop-card',
  templateUrl: './sponsored-desktop-card.component.html',
  styleUrls: ['./sponsored-desktop-card.component.scss'],
})
export class SponsoredDesktopCardComponent implements OnInit {

  @Input()
  public actions?: CardActionInput[];
  
  @Input()
  public entity?: Maybe<CardEntity>;

  @Input()
  public data?: Maybe<CardData>;

  @Output()
  public actionClicked = new EventEmitter<CardActionOutput>();

  public element?: Maybe<CardElement>;

  public ngOnInit(): void {
    if (this.entity && this.data) {
      this.element = dataToElement(this.entity, this.data);
    }
  }

  public emit(action: CardActionInput): void {
    this.actionClicked.emit({ ...action, element: this.element as CardElement })
  }
  
}
