import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { CardType } from 'src/app/shared/card/typings/card';
import { SortPaginate } from 'src/app/shared/table/typings/table';
import { PortalFavoritesActions } from '../../state/portal-favorites.actions';
import { selectFavoriteOrganisations } from '../../state/portal-favorites.selectors';

@Component({
  selector: 'app-portal-favorite-organisations',
  templateUrl: './portal-favorite-organisations.component.html',
  styleUrls: ['./portal-favorite-organisations.component.scss']
})
export class PortalFavoriteOrganisationsComponent{

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public favoriteOrganisations = this.store.select(selectFavoriteOrganisations);

  public cardType = CardType.Contact;
  
  constructor(
    public store: Store
  ) { }
  
  public updateParams(params: SortPaginate) {
    this.store.dispatch(PortalFavoritesActions.getFavoriteOrganisations(params));
  }
}