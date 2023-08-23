import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PortalGuestArticleActions } from 'src/app/features/guest-article/portal/main/state/portal-guest-article.actions';


@Component({
  selector: 'app-portal-guest-article-form',
  templateUrl: './portal-guest-article-form.component.html',
  styleUrls: ['./portal-guest-article-form.component.scss'],
})
export class PortalGuestArticleFormComponent {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  public form = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { }

  public onSubmit(captchaToken: string) {
    this.store.dispatch(PortalGuestArticleActions.saveArticle({
      name: this.form.value.title,
      content: this.form.value.content, 
      publicAuthor: {
        name: this.form.value.name,
        email: this.form.value.email,
        phone: this.form.value.phone
      },
      captchaToken: captchaToken,
    }));
    
  }

}

