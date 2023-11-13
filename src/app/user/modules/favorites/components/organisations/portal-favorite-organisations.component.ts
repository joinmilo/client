import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardType } from 'src/app/shared/widgets/card/typings/card';
import { SortPaginate } from 'src/app/shared/widgets/table/typings/table';
import { PortalFavoritesActions } from '../../state/portal-favorites.actions';
import { selectFavoriteOrganisations } from '../../state/portal-favorites.selectors';

@Component({
  selector: 'app-portal-favorite-organisations',
  templateUrl: './portal-favorite-organisations.component.html',
  styleUrls: ['./portal-favorite-organisations.component.scss']
})
export class PortalFavoriteOrganisationsComponent implements OnInit{

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public favoriteOrganisations = this.store.select(selectFavoriteOrganisations);

  public cardType = CardType.Contact;
  
  constructor(
    public store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(PortalFavoritesActions.getFavoriteOrganisations());
  }
  
  public updateParams(params: SortPaginate) {
    this.store.dispatch(PortalFavoritesActions.getFavoriteOrganisations(params));
  }
}