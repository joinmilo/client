import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardActionInput, CardActionOutput, CardData, CardElement, CardEntity } from 'src/app/shared/widgets/card/typings/card';
import { Maybe } from 'src/schema/schema';
import { dataToElement } from '../../utils/card.utils';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

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
