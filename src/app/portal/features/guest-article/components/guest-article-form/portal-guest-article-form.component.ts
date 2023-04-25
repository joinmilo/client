import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { PortalGuestArticleActions } from '../../state/portal-guest-article.actions';
import { selectArticleCategories, selectSavedArticle } from '../../state/portal-guest-article.selectors';

@Component({
  selector: 'app-portal-guest-article-form',
  templateUrl: './portal-guest-article-form.component.html',
  styleUrls: ['./portal-guest-article-form.component.scss'],
})
export class PortalGuestArticleFormComponent implements OnDestroy {

  public form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    // publicAuthor: [{} as PublicAuthorEntity],
    // category: [{} as ArticleCategoryEntity],
    title: ['', [Validators.required]],
    captchaToken: ['', [Validators.required]],
    content: ['', [Validators.required]]
  });

  private destroy = new Subject<void>();

  public categories = this.store.select(selectArticleCategories);

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {

    this.store.dispatch(PortalGuestArticleActions.setArticleCategories());
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.store.dispatch(PortalGuestArticleActions.saveArticle({
      //TODO translatables content and title
      publicAuthor: {
        name: this.form.value.name,
        email: this.form.value.email,
        phone: this.form.value.phone
      },
      // category: {
      //   id: this.form.value.category?.id
      // },
      captchaToken: this.form.value.captchaToken
    }));
    this.store.select(selectSavedArticle)
      .pipe(takeUntil(this.destroy))
      .subscribe(article => article?.id && formDirective.resetForm());
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}

