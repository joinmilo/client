import { Component, Input } from '@angular/core';
import { CardInput } from 'src/app/core/typings/card';

@Component({
  selector: 'app-favorite-piece',
  templateUrl: './favorite-piece.component.html',
  styleUrls: ['./favorite-piece.component.scss'],
})
export class FavoritePieceComponent {

  @Input()
  public data: CardInput = { dateTime: true };

  isFavorite = false;

  public changeFavorite() {
    this.isFavorite = !this.isFavorite;
  }

}
