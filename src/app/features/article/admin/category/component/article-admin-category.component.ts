import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { AuthService } from 'ngx-cinlib/security';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { ArticleCategoryEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { Privilege } from 'src/app/core/typings/privilege';
import { ArticleAdminCategoryActions } from '../state/article-admin-category.actions';
import { selectCategoryData } from '../state/article-admin-category.selectors';

@Component({
  selector: 'app-article-admin-category',
  templateUrl: './article-admin-category.component.html',
  styleUrls: ['./article-admin-category.component.scss']
})
export class ArticleAdminCategoryComponent implements OnInit {

  public categories = this.store.select(selectCategoryData);

  public isArticleAdmin = false;

  public actions: RowAction<ArticleCategoryEntity>[] = [    
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'form'], { relativeTo: this.activatedRoute }),
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
      value: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'icon',
      label: 'icon',
      type: 'ICON',
    },
    {
      field: 'color',
      label: 'color',
      type: 'COLOR'
    },
  ];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public ngOnInit(): void {
    this.checkPrivileges();
  }
  
  private checkPrivileges() {
    this.isArticleAdmin = this.authService.hasAnyPrivileges<Privilege>(['articles_admin']);
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(ArticleAdminCategoryActions.updateParams(params));
  }

}