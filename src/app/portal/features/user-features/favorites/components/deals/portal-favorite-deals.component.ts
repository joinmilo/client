import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardType } from 'src/app/shared/card/typings/card';
import { SortPaginate } from 'src/app/shared/table/typings/table';
import { PortalFavoritesActions } from '../../state/portal-favorites.actions';
import { selectFavoriteDeals } from '../../state/portal-favorites.selectors';

@Component({
  selector: 'app-portal-favorite-deals',
  templateUrl: './portal-favorite-deals.component.html',
  styleUrls: ['./portal-favorite-deals.component.scss']
})
export class PortalFavoriteDealsComponent {

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public favoriteDeals = this.store.select(selectFavoriteDeals);

  public cardType = CardType.Content;
  
  constructor(
    public store: Store
  ) { }
  
  public updateParams(params: SortPaginate) {
    this.store.dispatch(PortalFavoritesActions.getFavoriteDeals(params));
  }
}