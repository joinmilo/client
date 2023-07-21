import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardType } from 'src/app/shared/card/typings/card';
import { SortPaginate } from 'src/app/shared/table/typings/table';
import { PortalFavoritesActions } from '../../state/portal-favorites.actions';
import { selectFavoriteEvents } from '../../state/portal-favorites.selectors';


@Component({
  selector: 'app-portal-favorite-events',
  templateUrl: './portal-favorite-events.component.html',
  styleUrls: ['./portal-favorite-events.component.scss']
})
export class PortalFavoriteEventsComponent {

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public favoriteEvents = this.store.select(selectFavoriteEvents);

  public cardType = CardType.Content;
  
  constructor(
    public store: Store
  ) { }
  
  public updateParams(params: SortPaginate) {
    this.store.dispatch(PortalFavoritesActions.getFavoriteEvents(params));
  }
}