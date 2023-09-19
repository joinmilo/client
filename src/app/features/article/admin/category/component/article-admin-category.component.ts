import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ArticleCategoryEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { ArticleAdminCategoryActions } from '../state/article-admin-category.actions';
import { selectCategoryData } from '../state/article-admin-category.selectors';

@Component({
  selector: 'app-article-admin-category',
  templateUrl: './article-admin-category.component.html',
  styleUrls: ['./article-admin-category.component.scss']
})
export class ArticleAdminCategoryComponent {

  public categories = this.store.select(selectCategoryData);

  public actions: RowAction<ArticleCategoryEntity>[] = [    
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'edit'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: category =>
        this.store.dispatch(ArticleAdminCategoryActions.deleteCategory(category)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<ArticleCategoryEntity>[] = [
    {
      field: 'translatables.name',
      label: 'category',
      type: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'icon',
      label: 'icon',
    },
    {
      field: 'color',
      label: 'color',
    },
  ];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(ArticleAdminCategoryActions.updateParams(params));
  }

}