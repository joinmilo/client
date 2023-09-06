import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserSettingsActions } from '../../../../state/user-settings.actions';


@Component({
  selector: 'app-user-delete-account-description',
  templateUrl: './user-delete-account-description.component.html',
  styleUrls: ['./user-delete-account-description.component.scss'],
})
export class UserDeleteAccountDescriptionComponent {

  public form = this.fb.group({
    description: [''],
  });

  constructor(  
    private store: Store,
    private fb: FormBuilder
  ) { }

  public onSubmit() {
    this.store.dispatch(
    UserSettingsActions.saveUserDeletionDescription(
        this.form.value.description ?? ''     
    ));
  }
}