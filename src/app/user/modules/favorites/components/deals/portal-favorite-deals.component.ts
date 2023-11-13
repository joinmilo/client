import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardType } from 'src/app/shared/widgets/card/typings/card';
import { SortPaginate } from 'src/app/shared/widgets/table/typings/table';
import { PortalFavoritesActions } from '../../state/portal-favorites.actions';
import { selectFavoriteDeals } from '../../state/portal-favorites.selectors';

@Component({
  selector: 'app-portal-favorite-deals',
  templateUrl: './portal-favorite-deals.component.html',
  styleUrls: ['./portal-favorite-deals.component.scss']
})
export class PortalFavoriteDealsComponent implements OnInit{

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public favoriteDeals = this.store.select(selectFavoriteDeals);

  public cardType = CardType.Content;
  
  constructor(
    public store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(PortalFavoritesActions.getFavoriteDeals());
  }
  
  public updateParams(params: SortPaginate) {
    this.store.dispatch(PortalFavoritesActions.getFavoriteDeals(params));
  }
  
}