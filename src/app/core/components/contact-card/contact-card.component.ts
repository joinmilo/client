import { Component, Input } from '@angular/core';
import { CardInput } from '../../typings/card';



@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {

  @Input()
  public data: CardInput = { dateTime: true };

  isFavorite = false;

  public changeFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
