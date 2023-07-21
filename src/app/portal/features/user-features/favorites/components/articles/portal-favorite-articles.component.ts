import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardType } from 'src/app/shared/card/typings/card';
import { SortPaginate } from 'src/app/shared/table/typings/table';
import { PortalFavoritesActions } from '../../state/portal-favorites.actions';
import { selectFavoriteArticles } from '../../state/portal-favorites.selectors';


@Component({
  selector: 'app-portal-favorite-articles',
  templateUrl: './portal-favorite-articles.component.html',
  styleUrls: ['./portal-favorite-articles.component.scss']
})
export class PortalFavoriteArticlesComponent {

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public favoriteArticles = this.store.select(selectFavoriteArticles);

  public cardType = CardType.Content;
  
  constructor(
    public store: Store
  ) { }
  
  public updateParams(params: SortPaginate) {
    this.store.dispatch(PortalFavoritesActions.getFavoriteArticles(params));
  }
}