import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { AccountActions } from '../../state/account.actions';

@Component({
  selector: 'app-login-stepper',
  templateUrl: './login-stepper.component.html',
  styleUrls: [
    '../form.scss',
    './login-stepper.component.scss'
  ],
})
export class LoginStepperComponent implements OnInit {

  private currentUser?: Maybe<UserContextEntity>;

  public form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: [''],
    street: [''],
    houseNumber: [''],
    postalCode: [''],
    place: [''],
    profilePicture: [] //todo MediaEntity
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { }
  ngOnInit(): void {

    this.store.select(selectCurrentUser).subscribe(user => this.currentUser = user);
  }

  saveData() {
    console.log(this.currentUser);

    const test = {
      id: this.currentUser?.id,
      //todo mediaEntityInput
      address: {
        street: this.form.value.street ?? "",
        houseNumber: this.form.value.houseNumber ?? "",
        postalCode: this.form.value.postalCode ?? "",
        place: this.form.value.place ?? ""
      },

      user: {
        id: this.currentUser?.user?.id,
        lastLoggedIn: new Date().toISOString(),
        firstName: this.form.value.firstName ?? "",
        lastName: this.form.value.lastName ?? "",
        phone: this.form.value.phone ?? ""
      }
    }
    console.log(test);

    this.store.dispatch(AccountActions.save(
      test
    ))
  }
}