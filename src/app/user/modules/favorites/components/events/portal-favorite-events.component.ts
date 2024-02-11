import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { SortPaginate } from 'ngx-cinlib/tables';
import { CardType } from 'src/app/shared/widgets/card/typings/card';
import { PortalFavoritesActions } from '../../state/portal-favorites.actions';
import { selectFavoriteEvents } from '../../state/portal-favorites.selectors';


@Component({
  selector: 'app-portal-favorite-events',
  templateUrl: './portal-favorite-events.component.html',
  styleUrls: ['./portal-favorite-events.component.scss']
})
export class PortalFavoriteEventsComponent implements OnInit{

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public favoriteEvents = this.store.select(selectFavoriteEvents);

  public cardType = CardType.Content;
  
  constructor(
    public store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(PortalFavoritesActions.getFavoriteEvents());
  }
  
  public updateParams(params: SortPaginate) {
    this.store.dispatch(PortalFavoritesActions.getFavoriteEvents(params));
  }
}