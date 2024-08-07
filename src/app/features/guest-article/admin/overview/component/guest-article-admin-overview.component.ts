import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { ArticleEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { GuestArticleAdminOverviewActions } from '../state/guest-article-admin-overview.actions';
import { selectOverviewData } from '../state/guest-article-admin-overview.selectors';

@Component({
  selector: 'app-guest-article-admin-overview',
  templateUrl: './guest-article-admin-overview.component.html',
  styleUrls: ['./guest-article-admin-overview.component.scss']
})
export class GuestArticleAdminOverviewComponent {

  public guestArticles = this.store.select(selectOverviewData);

  public actions: RowAction<ArticleEntity>[] = [
    {
      icon: 'toggle-off',
      callback: article =>
        this.store.dispatch(GuestArticleAdminOverviewActions.toggleArticleApproval(article)),
      tooltipLabel: 'changeArticleApproval',
    },
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate(['admin/articles', row?.slug, 'form']),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: guestGuestArticle =>
        this.store.dispatch(GuestArticleAdminOverviewActions.deleteArticle(guestGuestArticle)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<ArticleEntity>[] = [
    {
      field: 'name',
      label: 'title',
      value: row => this.translationService.watchTranslatable(row.translatables, 'name')
    },
    {
      field: 'publicAuthor.name',
      label: 'author',
    },
    {
      field: 'publicAuthor.phone',
      label: 'phone',
    },
    {
      field: 'publicAuthor.email',
      label: 'email',
    },
    {
      field: 'created',
      label: 'created',
      type: 'DATETIME',
      sort: true,
    },
    {
      field: 'approved',
      label: 'approved',
      type: 'BOOLEAN',
      sort: true,
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(GuestArticleAdminOverviewActions.updateParams(params));
  }
}
