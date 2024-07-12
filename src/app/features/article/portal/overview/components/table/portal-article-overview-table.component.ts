import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Column, RowAction, SortPaginate } from 'ngx-cinlib/tables';
import { ArticleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { likeAction, shareAction } from 'src/app/core/utils/table.utils';
import { selectOverviewData } from '../../state/portal-article-overview.selectors';

@Component({
  selector: 'app-portal-article-overview-table',
  templateUrl: './portal-article-overview-table.component.html',
  styleUrls: ['./portal-article-overview-table.component.scss']
})
export class PortalArticleOverviewTableComponent {

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public articles = this.store.select(selectOverviewData);

  public actions: RowAction<ArticleEntity>[] = [
    shareAction('ArticleEntity'),
    likeAction('ArticleEntity')
  ];

  public columns: Column<ArticleEntity>[] = [
    {
      field: 'name',
      label: 'title',
      value: row => this.translationService.watchTranslatable(row.translatables, 'name')
    },
    {
      field: 'author.user.lastName',
      label: 'author',
      value: row => `${row.author?.user?.firstName} ${row.author?.user?.lastName}`
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
  ];

  public rowClicked(article: Maybe<ArticleEntity>): void {
    this.router.navigate([article?.slug], { relativeTo: this.activatedRoute })
  }

  constructor(
    private store: Store,
    private translationService: TranslationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
}
