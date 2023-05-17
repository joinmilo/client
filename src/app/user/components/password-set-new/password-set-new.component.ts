import { Component } from '@angular/core';
import { FormBuilder, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { UserActions } from 'src/app/user/state/user.actions';
import { tokenSlug } from '../../constants/user.constants';


@Component({
  selector: 'app-password-set-new',
  templateUrl: './password-set-new.component.html',
  styleUrls: [
    '../form.scss',
    './password-set-new.component.scss'
  ],
})
export class PasswordSetNewComponent {

  public form = this.fb.group({});
  public token?: string | null;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  public onSubmit(formDirective: FormGroupDirective) {
   this.route.paramMap.pipe(
    tap(params => {
      this.store.dispatch(UserActions.resetPassword(
        params.get(tokenSlug),
        this.form.get('password')!.value))
    })).subscribe();

   formDirective.resetForm();
 }
}