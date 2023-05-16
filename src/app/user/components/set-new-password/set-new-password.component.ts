import { Component } from '@angular/core';
import { FormBuilder, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { resetToken } from 'src/app/user/constants/user.constants';
import { UserActions } from 'src/app/user/state/user.actions';


@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.scss'],
})
export class SetNewPasswordComponent{

  public form = this.fb.group({});
  public token?: string | null;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  onSubmit(formDirective: FormGroupDirective) {
   this.route.paramMap.pipe(
    tap(params => {
      this.store.dispatch(UserActions.resetPassword(
        params.get(resetToken),
        this.form.get('password')!.value))
    })).subscribe();

   formDirective.resetForm();
 }
}