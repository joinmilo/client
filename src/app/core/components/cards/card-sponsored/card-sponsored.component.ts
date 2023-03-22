import { Component, Input } from '@angular/core';
import { CardInput } from '../../../typings/card';



@Component({
  selector: 'app-card-sponsored',
  templateUrl: './card-sponsored.component.html',
  styleUrls: ['./card-sponsored.component.scss']
})
export class CardSponsoredComponent {

  @Input()
  public data: CardInput = { dateTime: true };

  isFavorite = false;

  public changeFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
