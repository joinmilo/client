import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ArticleCategoryEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { ArticleAdminFormActions } from '../state/article-admin-form.actions';
import { selectEditableArticle } from '../state/article-admin-form.selectors';


@Component({
  selector: 'app-article-admin-form',
  templateUrl: './article-admin-form.component.html',
  styleUrls: ['./article-admin-form.component.scss']
})
export class ArticleAdminFormComponent implements OnInit, OnDestroy {

  public form = this.fb.group({
    id: ['' as Maybe<string>],
    name: ['' as Maybe<string>, [Validators.required]],
    category: [undefined as Maybe<ArticleCategoryEntity>, [Validators.required]],
    shortDescription: ['' as Maybe<string>, [Validators.required]],
    content: ['' as Maybe<string>, [Validators.required]],
    // uploads: [[] as Maybe<MediaEntity[]>],
    sponsored: [false as Maybe<boolean>],
    metaDescription: ['' as Maybe<string>],
  });

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute?.parent?.params.pipe(
      tap(params => this.store.dispatch(ArticleAdminFormActions.getArticle(params[slug]))),
      switchMap(() => this.store.select(selectEditableArticle)),
      takeUntil(this.destroy)
    ).subscribe(article => {
      if (article) {
        this.form = this.fb.group({
          id: [article?.id],
          name: [article?.name, [Validators.required]],
          category: [article?.category, [Validators.required]],
          shortDescription: [article?.shortDescription, [Validators.required]],
          content: [article?.content, [Validators.required]],
          // uploads: [article?.uploads],
          sponsored: [article?.sponsored],
          metaDescription: [article?.metaDescription],
        });
      }
    });
  }

  public cancelled(): void {
    this.store.dispatch(ArticleAdminFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(ArticleAdminFormActions.save({
      id: this.form.value.id,
      name: this.form.value.name,
      category: this.form.value.category,
      shortDescription: this.form.value.shortDescription,
      content: this.form.value.content,
      sponsored: this.form.value.sponsored,
      metaDescription: this.form.value.metaDescription
    }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}