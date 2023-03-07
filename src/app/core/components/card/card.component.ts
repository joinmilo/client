import { Component, Input } from '@angular/core';
import { CardInput } from '../../typings/card';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  public data: CardInput = { dateTime: true };

  isFavorite = false;

  changeFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
