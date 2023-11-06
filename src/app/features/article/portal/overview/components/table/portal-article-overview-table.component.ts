import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowDefaultAction, SortPaginate } from 'src/app/shared/widgets/table/typings/table';
import { selectOverviewData } from '../../state/portal-article-overview.selectors';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portal-article-overview-table',
  templateUrl: './portal-article-overview-table.component.html',
  styleUrls: ['./portal-article-overview-table.component.scss']
})
export class PortalArticleOverviewTableComponent {

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public articles = this.store.select(selectOverviewData);

  public actions: RowDefaultAction[] = [
    'LIKE', 'SHARE'
  ];

  public columns: Column<ArticleEntity>[] = [
    {
      field: 'translatables.name',
      label: 'title',
      value: row => this.translationService.translatable(row.translatables, 'name')
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