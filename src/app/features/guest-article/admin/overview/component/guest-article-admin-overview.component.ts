import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ArticleEntity, FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
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
      field: 'translatables.name',
      label: 'title',
      value: row => this.translationService.translatable(row.translatables, 'name')
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

  public rowClicked(article: Maybe<ArticleEntity>): void {
    this.router.navigate([article?.slug], { relativeTo: this.activatedRoute })
  }
}