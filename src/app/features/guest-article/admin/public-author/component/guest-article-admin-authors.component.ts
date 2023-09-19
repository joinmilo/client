import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticlePublicAuthorEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { GuestArticleAdminPublicAuthorsActions } from '../state/guest-article-admin-authors.actions';
import { selectPublicAuthorsData } from '../state/guest-article-admin-authors.selectors';

@Component({
  selector: 'app-guest-article-admin-authors',
  templateUrl: './guest-article-admin-authors.component.html',
  styleUrls: ['./guest-article-admin-authors.component.scss']
})
export class GuestArticleAdminPublicAuthorsComponent {

  public publicAuthors = this.store.select(selectPublicAuthorsData);

  public actions: RowAction<ArticlePublicAuthorEntity>[] = [    
    {
      icon: 'trash',
      callback: publicAuthor =>
        this.store.dispatch(GuestArticleAdminPublicAuthorsActions.deleteAuthor(publicAuthor)),
      tooltipLabel: 'delete'
    }
  ];

  public columns: Column<ArticlePublicAuthorEntity>[] = [
    {
      field: 'name',
      label: 'name',
      sort: true
    },
    {
      field: 'email',
      label: 'email',
      sort: true      
    },
    {
      field: 'phone',
      label: 'phone',
    },
    {
      field: 'articles',
      label: 'articles',
      type: 'LIST',
      sort: true,
    },
  ];
  
  constructor(
    private store: Store,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(GuestArticleAdminPublicAuthorsActions.updateParams(params));
  }
}