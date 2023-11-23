import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { id } from 'src/app/core/constants/queryparam.constants';
import { ArticleAdminCategoryFormActions } from '../state/article-admin-category-form.actions';
import { selectEditableArticleCategory } from '../state/article-admin-category-form.selectors';

@Component({
  selector: 'app-article-admin-category-form',
  templateUrl: './article-admin-category-form.component.html',
  styleUrls: ['./article-admin-category-form.component.scss']
})
export class ArticleAdminCategoryFormComponent implements OnInit, OnDestroy {

  public categoryForm = this.fb.group({
    id: ['' as Maybe<string>],
    name: ['' as Maybe<string>, [Validators.required]],
    icon: ['' as Maybe<string>, [Validators.required]],
    color: ['' as Maybe<string>, [Validators.required]],
  });

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) {}

  public ngOnInit(): void {
    this.activatedRoute?.parent?.params.pipe(
      filter(params => !!params[id]),
      tap((params) => this.store.dispatch(ArticleAdminCategoryFormActions.getCategory(params[id]))),
      switchMap(() => this.store.select(selectEditableArticleCategory)),
      filter(category => !!category),
      takeUntil(this.destroy)
    ).subscribe(category => {
      this.categoryForm = this.fb.group({
        id: [category?.id],
        name: [category?.name, [Validators.required]],
        icon: [category?.icon, [Validators.required]],
        color: [category?.color?.toString(), [Validators.required]],
      });
    });
  }

  public cancelled(): void {
    this.store.dispatch(ArticleAdminCategoryFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(ArticleAdminCategoryFormActions.save({
      id: this.categoryForm.value.id,
      name: this.categoryForm.value.name,
      icon: this.categoryForm.value.icon,
      color: this.categoryForm.value.color
    }));
  }

  public ngOnDestroy(): void {
    this.store.dispatch(ArticleAdminCategoryFormActions.cancelled());
    this.destroy.next();
    this.destroy.complete();

  }


}