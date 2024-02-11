import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { SortPaginate } from 'ngx-cinlib/tables';
import { CardType } from 'src/app/shared/widgets/card/typings/card';
import { PortalFavoritesActions } from '../../state/portal-favorites.actions';
import { selectFavoriteArticles } from '../../state/portal-favorites.selectors';


@Component({
  selector: 'app-portal-favorite-articles',
  templateUrl: './portal-favorite-articles.component.html',
  styleUrls: ['./portal-favorite-articles.component.scss']
})
export class PortalFavoriteArticlesComponent implements OnInit{

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public favoriteArticles = this.store.select(selectFavoriteArticles);

  public cardType = CardType.Content;
  
  constructor(
    public store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(PortalFavoritesActions.getFavoriteArticles());
  }
  
  public updateParams(params: SortPaginate) {
    this.store.dispatch(PortalFavoritesActions.getFavoriteArticles(params));
  }
}