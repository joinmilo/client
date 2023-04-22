import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-piece',
  templateUrl: './favorite-piece.component.html',
  styleUrls: ['./favorite-piece.component.scss'],
})
export class FavoritePieceComponent<T> implements OnInit {

  isFavorite = false;

  @Input()
  public entity?: T;

  public ngOnInit(): void {
    console.log(this.entity);
  }

  public changeFavorite() {
    this.isFavorite = !this.isFavorite;
  }

}
