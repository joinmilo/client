import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
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

  public titleImageForm = this.fb.group({
    titleImage: [[] as MediaEntity[], [Validators.required]],
  });

  public cardImageForm = this.fb.group({
    cardImage: [[] as MediaEntity[], [Validators.required]],
  });

  public uploadsForm = this.fb.group({
    uploads: [[] as MediaEntity[]],
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { }

  public cancelled(): void {
    this.store.dispatch(PortalGuestArticleActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(PortalGuestArticleActions.save({
      id: this.contentForm.value.id,
      name: this.contentForm.value.name,
      content: this.contentForm.value.content,
      publicAuthor: {
        name: this.infomationForm.value.userName,
        email: this.infomationForm.value.email,
      },
      uploads: (this.uploadsForm.value.uploads || []).map(media => ({
        media: media,
      })).concat(
        (this.cardImageForm.value.cardImage || []).map(media => ({ 
          media: media,
          card: true,
        }))
      ).concat(
        (this.titleImageForm.value.titleImage || []).map(media => ({
          media: media,
          title: true,
        }))
      ) || null,
    }));
  }
}