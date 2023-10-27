import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Maybe } from 'src/app/core/api/generated/schema';
import { PortalGuestArticleActions } from '../../state/portal-guest-article.actions';

@Component({
  selector: 'app-portal-guest-article-form',
  templateUrl: './portal-guest-article-form.component.html',
  styleUrls: ['./portal-guest-article-form.component.scss'],
})
export class PortalGuestArticleFormComponent {

  public contentForm = this.fb.group({
    id: ['' as Maybe<string>],
    name: ['' as Maybe<string>, [Validators.required]],
    content: ['' as Maybe<string>],
  });

  public infomationForm = this.fb.group({
    userName: ['' as Maybe<string>, [Validators.required]],
    email: ['' as Maybe<string>, [Validators.required]],
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { }

  public cancelled(): void {
    this.store.dispatch(PortalGuestArticleActions.cancelled());
  }

  public saved(captchaToken: Maybe<string>): void {
    this.store.dispatch(PortalGuestArticleActions.save({
      id: this.contentForm.value.id,
      captchaToken,
      name: this.contentForm.value.name,
      content: this.contentForm.value.content,
      publicAuthor: {
        name: this.infomationForm.value.userName,
        email: this.infomationForm.value.email,
      },
    }));
  }
}