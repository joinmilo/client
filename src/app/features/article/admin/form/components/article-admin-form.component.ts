import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { ArticleCategoryEntity, ArticleEntity, ArticleMediaEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ArticleAdminFormActions } from '../state/article-admin-form.actions';
import { selectArticleCategories, selectEditableArticle } from '../state/article-admin-form.selectors';
import { slug } from './../../../../../core/constants/queryparam.constants';

@Component({
  selector: 'app-article-admin-form',
  templateUrl: './article-admin-form.component.html',
  styleUrls: ['./article-admin-form.component.scss']
})
export class ArticleAdminFormComponent implements OnInit, OnDestroy {

  public contentForm = this.fb.group({
    id: ['' as Maybe<string>],
    name: ['' as Maybe<string>, [Validators.required]],
    categoryId: [undefined as Maybe<string>],
    content: ['' as Maybe<string>],
  });

  public shortDescriptionForm = this.fb.group({
    shortDescription: ['' as Maybe<string>],
  });

  public uploadsForm = this.fb.group({
    uploads: [[] as Maybe<ArticleMediaEntity>[], [Validators.required]],
  });

  public additionalInfoForm = this.fb.group({
    metaDescription: ['' as Maybe<string>],
    commentsAllowed: [undefined as Maybe<boolean>],
  });

  public categories = this.store.select(selectArticleCategories);
  public editCategory: Maybe<ArticleCategoryEntity>;
  public article?: Maybe<ArticleEntity>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(ArticleAdminFormActions.getCategories());

    this.activatedRoute?.parent?.params.pipe(
      filter(params => !!params[slug]),
      tap(params => this.store.dispatch(ArticleAdminFormActions.getArticle(params[slug]))),
      switchMap(() => this.store.select(selectEditableArticle)),
      filter(article => !!article?.id),
      takeUntil(this.destroy)
    ).subscribe(article => {
      
      this.contentForm.patchValue({
        id: article?.id,
        name: article?.name,
        categoryId: article?.category?.id,
        content: article?.content,
      });

      this.shortDescriptionForm.patchValue({
        shortDescription: article?.shortDescription,
      });

      this.uploadsForm.patchValue({
        uploads: article?.uploads
      });

      this.additionalInfoForm.patchValue({
        metaDescription: article?.metaDescription,
        commentsAllowed: article?.commentsAllowed
      });
    });
  }

  public cancelled(): void {
    this.store.dispatch(ArticleAdminFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(ArticleAdminFormActions.save({
      id: this.contentForm.value.id,
      name: this.contentForm.value.name,
      category: this.contentForm.value.categoryId != null
        ? { id: this.contentForm.value.categoryId }
        : null,
      content: this.contentForm.value.content,
      shortDescription: this.shortDescriptionForm.value.shortDescription,
      metaDescription: this.additionalInfoForm.value.metaDescription,
      commentsAllowed: this.additionalInfoForm.value.commentsAllowed,
      uploads: this.uploadsForm.value.uploads
    }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}