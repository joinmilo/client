import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { ArticleCategoryEntity, ArticleEntity, Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
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
    content: ['' as Maybe<string>],
  });

  public shortDescriptionForm = this.fb.group({
    shortDescription: ['' as Maybe<string>, [Validators.required]],
  });

  public titleImageForm = this.fb.group({
    titleImage: [[] as MediaEntity[], [Validators.required]],
  });

  public cardImageForm = this.fb.group({
    cardImage: [[] as MediaEntity[], [Validators.required]],
  });

  public uploadsForm = this.fb.group({
    uploads: [[] as MediaEntity[]],
  });

  public additionalInfoForm = this.fb.group({
    categoryId: [undefined as Maybe<string>],
    sponsored: [undefined as Maybe<boolean>],
    metaDescription: ['' as Maybe<string>],
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
        content: article?.content,
      });

      this.shortDescriptionForm.patchValue({
        shortDescription: article?.shortDescription,
      });

      this.titleImageForm.patchValue({
        titleImage: article?.uploads?.filter(upload => upload?.title).map(upload => upload?.media) as MediaEntity[]
      });

      this.cardImageForm.patchValue({
        cardImage: 
          article?.uploads?.filter(upload => upload?.card).map(upload => upload?.media) as MediaEntity[]
      });

      this.uploadsForm.patchValue({
        uploads: article?.uploads?.filter(upload => !upload?.title && !upload?.card)
          .map(upload => upload?.media) as MediaEntity[]
      });

      this.additionalInfoForm.patchValue({
        categoryId: article?.category?.id,
        sponsored: article?.sponsored,
        metaDescription: article?.metaDescription,
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
      content: this.contentForm.value.content,
      shortDescription: this.shortDescriptionForm.value.shortDescription,
      category: this.additionalInfoForm.value.categoryId != null
        ? { id: this.additionalInfoForm.value.categoryId }
        : null,
      sponsored: this.additionalInfoForm.value.sponsored,
      metaDescription: this.additionalInfoForm.value.metaDescription,
      uploads: (this.uploadsForm.value.uploads || []).map(media => ({
        id: this.article?.uploads?.filter(upload => upload?.media?.id == media.id)[0]?.id,
        media: media,
      })).concat(
        (this.cardImageForm.value.cardImage || []).map(media => ({ 
          id: this.article?.uploads?.filter(upload => upload?.media?.id == media.id)[0]?.id,
          media: media,
          card: true,
        }))
      ).concat(
        (this.titleImageForm.value.titleImage || []).map(media => ({
          id: this.article?.uploads?.filter(upload => upload?.media?.id == media.id)[0]?.id,
          media: media,
          title: true,
        }))
      ) || null,
    }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}