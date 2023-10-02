import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Maybe, MediaEntity, OrganisationEntity, UserContextEntity } from 'src/app/core/api/generated/schema';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { AccountActions } from '../../state/account.actions';
import { selectOrganisations } from '../../state/account.selectors';

@Component({
  selector: 'app-first-login-form',
  templateUrl: './first-login-form.component.html',
  styleUrls: [
    '../form.scss',
    './first-login-form.component.scss'
  ],
})
export class FirstLoginFormComponent implements OnInit, OnDestroy {

  private currentUser?: Maybe<UserContextEntity>;

  public organisations = this.store.select(selectOrganisations);
  public profilePicture?: Maybe<MediaEntity>;

  public form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: [''],
    content: [''],
    author: [false],
    organisations: [[] as OrganisationEntity[]],
    uploads: [[] as MediaEntity[]],
  });

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(AccountActions.getOrganisations());
    this.store.select(selectCurrentUser)
      .pipe(takeUntil(this.destroy))
      .subscribe(user => this.currentUser = user);
  }

  public addUploads(uploads: MediaEntity[]): void {
    this.profilePicture = uploads[0];
  }

  public saveData(): void {
    const memberEntities = this.form.value.organisations?.map(organisation => ({
      organisation: { id: organisation.id },
      userContext: { id: this.currentUser?.id },
      approved: false,
      isPublic: false
    }));

    this.store.dispatch(AccountActions.saveFirstLogin({
      id: this.currentUser?.id,
      user: {
        id: this.currentUser?.user?.id,
        lastLogin: new Date().toISOString(),
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        phone: this.form.value.phone,
        privilegeApplications:
          this.form.value.author ?
            [
              {
                user: { id: this.currentUser?.user?.id },
                privilege: { code: 'articles_manage' },
                accepted: false,
                content: this.form.value.content ?? ''
              }
            ]
            : [],
        userContext: {
          uploads: (this.form.value.uploads || []).map(media => ({
            media: media,
            profilePicture: true,
            title: false,
            userContext: { id: this.currentUser?.id}
          }))
        }
      },
      members: memberEntities
    }
    ))
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}