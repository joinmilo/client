import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-piece',
  templateUrl: './favorite-piece.component.html',
  styleUrls: ['./favorite-piece.component.scss'],
})
export class FavoritePieceComponent<T> {

  @Input()
  public entity?: T;

  @Input()
  public withLabel = false;

  isFavorite = false;

  public changeFavorite() {
    this.isFavorite = !this.isFavorite;
  }

}
