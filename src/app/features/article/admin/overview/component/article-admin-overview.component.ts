import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ArticleEntity, FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { ArticleAdminOverviewActions } from '../state/article-admin-overview.actions';
import { selectOverviewData } from '../state/article-admin-overview.selectors';

@Component({
  selector: 'app-article-admin-overview',
  templateUrl: './article-admin-overview.component.html',
  styleUrls: ['./article-admin-overview.component.scss']
})
export class ArticleAdminOverviewComponent {

  public articles = this.store.select(selectOverviewData);

  public actions: RowAction<ArticleEntity>[] = [    
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.slug, 'edit'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'bullhorn',
      callback: row =>
        this.store.dispatch(ArticleAdminOverviewActions.sponsorArticle(row)),
      tooltipLabel: 'highlightInPortal'
    },
    {
      icon: 'trash',
      callback: article =>
        this.store.dispatch(ArticleAdminOverviewActions.deleteArticle(article)),
      tooltipLabel: 'delete'
    },

    'SHARE',
  ];

  public columns: Column<ArticleEntity>[] = [
    {
      field: 'translatables.name',
      label: 'title',
      type: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'author.user.lastName',
      label: 'author',
      type: row => `${row.author?.user?.firstName ?? ''} ${row.author?.user?.lastName ?? ''}`
    },
    {
      field: 'modified',
      label: 'date',
      type: 'DATETIME',
      sort: true,
    },
    {
      field: 'category',
      label: 'category',
      type: 'CATEGORY',
    },
    {
      field: 'sponsored',
      label: 'sponsored',
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
    this.store.dispatch(ArticleAdminOverviewActions.updateParams(params));
  }

  public rowClicked(article: Maybe<ArticleEntity>): void {
    this.router.navigate([article?.slug], { relativeTo: this.activatedRoute })
  }
}