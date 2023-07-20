import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TablePaginatorComponent } from 'src/app/shared/table/components/paginator/table-paginator.component';
import { PageableList, SortPaginate } from 'src/app/shared/table/typings/table';
import { PortalFavoritesActions } from '../../state/portal-favorites.actions';
import { selectFavoriteAuthors } from '../../state/portal-favorites.selectors';

@Component({
  selector: 'app-portal-favorite-authors',
  templateUrl: './portal-favorite-authors.component.html',
  styleUrls: ['./portal-favorite-authors.component.scss']
})
export class PortalFavoriteAuthorsComponent<T> implements OnInit{

  public favoriteAuthors = this.store.select(selectFavoriteAuthors);

  @Input()
  public data?: Observable<PageableList<T> | undefined>;

  @Input()
  public initParams?: SortPaginate;

  @ViewChild(TablePaginatorComponent)
  public paginator!: TablePaginatorComponent;

  constructor(
    public store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(PortalFavoritesActions.getFavoriteAuthors())
  }
}