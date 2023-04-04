import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { GuestArticleActions } from './../../state/guest-article.actions';
import { selectArticleCategories, selectSavedArticle } from './../../state/guest-article.selectors';

@Component({
  selector: 'app-guest-article-input',
  templateUrl: './guest-article-input.component.html',
  styleUrls: ['./guest-article-input.component.scss'],
})
export class GuestArticleInputComponent implements OnDestroy {

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

    this.store.dispatch(GuestArticleActions.setArticleCategories());
  }

  onSubmit(formDirective: FormGroupDirective) {
    console.log(this.form.value.content);
    this.store.dispatch(GuestArticleActions.saveArticle({
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

