import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { LanguageEntity, Maybe, MediaEntity, OrganisationEntity, UserContextEntity } from 'src/app/core/api/generated/schema';
import { selectLanguages } from 'src/app/core/state/selectors/core.selectors';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { AppValidators } from 'src/app/core/validators/validators';
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

  public languages = this.store.select(selectLanguages);
  public organisations = this.store.select(selectOrganisations);
  public profilePicture?: Maybe<MediaEntity>;

  public form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: ['', [AppValidators.phone()]],
    content: [''],
    author: [false],
    organisations: [[] as OrganisationEntity[]],
    uploads: [[] as MediaEntity[]],
    languageId: [undefined as Maybe<string>]
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
      .subscribe(user => {
        this.currentUser = user

        this.form.patchValue({
          languageId: user?.user?.language?.id
        })
      });
  }

  compareLanguages(language1: LanguageEntity, language2: LanguageEntity) {
    return language1?.id === language2?.id;
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
      uploads: (this.form.value.uploads || []).map(media => ({
        id: this.currentUser?.uploads?.filter(upload => upload?.media?.id == media.id)[0]?.id,
        media: media,
        profilePicture: true,
        title: false,
        userContext: { id: this.currentUser?.id}
      })),
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
        language:
          this.form.value.languageId != null
            ? { id: this.form.value.languageId }
            : null,
      },
      members: memberEntities,
    }
    ))
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}