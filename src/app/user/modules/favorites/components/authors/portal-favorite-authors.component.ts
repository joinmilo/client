import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { SortPaginate } from 'ngx-cinlib/tables';
import { CardType } from 'src/app/shared/widgets/card/typings/card';
import { PortalFavoritesActions } from '../../state/portal-favorites.actions';
import { selectFavoriteAuthors } from '../../state/portal-favorites.selectors';

@Component({
  selector: 'app-portal-favorite-authors',
  templateUrl: './portal-favorite-authors.component.html',
  styleUrls: ['./portal-favorite-authors.component.scss']
})
export class PortalFavoriteAuthorsComponent implements OnInit{

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public favoriteAuthors = this.store.select(selectFavoriteAuthors);

  public cardType = CardType.Contact;
  
  constructor(
    public store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(PortalFavoritesActions.getFavoriteAuthors());
  }

  public updateParams(params: SortPaginate) {
    this.store.dispatch(PortalFavoritesActions.getFavoriteAuthors(params));
  }
}