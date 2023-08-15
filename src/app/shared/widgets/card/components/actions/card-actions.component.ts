import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardActionInput } from 'src/app/shared/widgets/card/typings/card';

@Component({
  selector: 'app-card-actions',
  templateUrl: './card-actions.component.html',
  styleUrls: ['./card-actions.component.scss']
})
export class CardActionsComponent {

  @Input()
  public actions?: CardActionInput[];

  @Output()
  public actionClicked = new EventEmitter<CardActionInput>();

}
