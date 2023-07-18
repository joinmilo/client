import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-piece',
  templateUrl: './favorite-piece.component.html',
  styleUrls: ['./favorite-piece.component.scss'],
})
export class FavoritePieceComponent<T> {

  isFavorite = false;

  @Input()
  public entity?: T;

  @Input()
  public actionMenu = false;


  public changeFavorite() {
    this.isFavorite = !this.isFavorite;
  }

}
