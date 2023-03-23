import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-piece',
  templateUrl: './favorite-piece.component.html',
  styleUrls: ['./favorite-piece.component.scss'],
})
export class FavoritePieceComponent {

  isFavorite = false;

  public changeFavorite() {
    this.isFavorite = !this.isFavorite;
  }

}
