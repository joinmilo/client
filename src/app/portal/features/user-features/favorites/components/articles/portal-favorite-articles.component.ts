import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TablePaginatorComponent } from 'src/app/shared/table/components/paginator/table-paginator.component';
import { PageableList, SortPaginate } from 'src/app/shared/table/typings/table';
import { PortalFavoritesActions } from '../../state/portal-favorites.actions';
import { selectFavoriteArticles } from '../../state/portal-favorites.selectors';


@Component({
  selector: 'app-portal-favorite-articles',
  templateUrl: './portal-favorite-articles.component.html',
  styleUrls: ['./portal-favorite-articles.component.scss']
})
export class PortalFavoriteArticlesComponent<T> implements OnInit{

  public favoriteArticles = this.store.select(selectFavoriteArticles);

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
    this.store.dispatch(PortalFavoritesActions.getFavoriteArticles())
  }
}