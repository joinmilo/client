import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { Maybe, MediaEntity, OrganisationEntity, UserContextEntity } from 'src/schema/schema';
import { AccountActions } from '../../state/account.actions';
import { selectOrganisations } from './../../state/account.selectors';

@Component({
  selector: 'app-login-stepper',
  templateUrl: './login-stepper.component.html',
  styleUrls: [
    '../form.scss',
    './login-stepper.component.scss'
  ],
})
export class LoginStepperComponent implements OnInit {

  public value = '';
  public formControl = new FormControl();
  private currentUser?: Maybe<UserContextEntity>;
  public organisations = this.store.select(selectOrganisations);
  public profilePicture?: Maybe<MediaEntity>;

  public form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: [''],
    street: [''],
    houseNumber: [''],
    postalCode: [''],
    place: [''],
    content: [''],
    author: [false],
    organisations: [[] as OrganisationEntity[]]
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(AccountActions.getOrganisations());
    this.store.select(selectCurrentUser).subscribe(user => this.currentUser = user);
  }

  addUploads(uploads: MediaEntity[]): void{
    this.profilePicture = uploads[0];
  }

  saveData() {
     console.log(this.profilePicture);
     console.log(this.form.value.author);
    const memberEntities = this.form.value.organisations?.map(organisation => ({
      organisation: { id: organisation.id },
      userContext: { id: this.currentUser?.id },
      approved: false,
      admin: false,
      isPublic: false
    }));

    this.store.dispatch(AccountActions.save({
      id: this.currentUser?.id,
      uploads: [{
        title: false,
        profilePicture: true,
        userContext: { id: this.currentUser?.id },
        media: this.profilePicture
      }],
      user: {
        id: this.currentUser?.user?.id,
        lastLoggedIn: new Date().toISOString(),
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        phone: this.form.value.phone,
        roleApplications:
          this.form.value.author ?
            [
              {
                user: { id: this.currentUser?.user?.id },
                role: { keyword: "author" },
                accepted: false,
                content: this.form.value.content
              }
            ]
            : []
      },
      member: memberEntities
    }
    ))
  }
}