import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import {
  AddressEntity,
  Maybe,
  MediaEntity,
  UserContextEntity
} from 'src/app/core/api/generated/schema';
import { selectLanguages } from 'src/app/core/state/selectors/core.selectors';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';

import { CinValidators } from 'ngx-cinlib/forms/validators';
import { UserSettingsActions } from '../../../state/user-settings.actions';

@Component({
  selector: 'app-user-personal-data-form',
  templateUrl: './user-personal-data-form.component.html',
  styleUrls: ['./user-personal-data-form.component.scss'],
})
export class UserPersonalDataFormComponent implements OnInit, OnDestroy {


  public userForm = this.fb.group({
    firstName: [undefined as Maybe<string>, [Validators.required]],
    lastName: [undefined as Maybe<string>, [Validators.required]],
    email: ['', [Validators.required, CinValidators.email as () => ValidationErrors]],
    phone: ['', [CinValidators.phone as () => ValidationErrors]],
  });

  public ProfilePictureForm = this.fb.group({
    profilePicture: [[] as MediaEntity[]],
  });

  public titleImageForm = this.fb.group({
    titleImage: [[] as MediaEntity[]],
  });

  public addressForm = this.fb.group({
    address: [undefined as Maybe<AddressEntity>],
  });

  public additionalInfoForm = this.fb.group({
    description: [''],
    languageId: [''],
  });

  public user?: Maybe<UserContextEntity>;

  public languages = this.store.select(selectLanguages);

  private destroy = new Subject<void>();

  constructor(

    private store: Store,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.store
      .select(selectCurrentUser)
      .pipe(takeUntil(this.destroy))
      .subscribe((currentUser) => {
        this.user = currentUser;
        this.userForm.patchValue({
          firstName: currentUser?.user?.firstName,
          lastName: currentUser?.user?.lastName,
          email: currentUser?.user?.email,
          phone: currentUser?.user?.phone,
        });

        this.ProfilePictureForm.patchValue({
          profilePicture: currentUser?.uploads?.filter(upload =>
            upload?.profilePicture).map(upload => upload?.media) as MediaEntity[],
        });

        this.titleImageForm.patchValue({
          titleImage: currentUser?.uploads?.filter(upload =>
            upload?.title).map(upload => upload?.media) as MediaEntity[],
        });

        this.addressForm.patchValue({
          address: currentUser?.address,
        });

        this.additionalInfoForm.patchValue({
          description: currentUser?.description,
          languageId: currentUser?.user?.language?.id,
        });
      });
  }

  public saved(): void {

    this.store.dispatch(
      UserSettingsActions.savePersonalData({
        id: this.user?.id,
        user: {
          id: this.user?.user?.id,
          firstName: this.userForm.value.firstName,
          lastName: this.userForm.value.lastName,
          email: this.userForm.value.email,
          phone: this.userForm.value.phone,

          language:
            this.additionalInfoForm.value.languageId != null
              ? { id: this.additionalInfoForm.value.languageId }
              : null,
        },

        address: this.addressForm.value.address ?? null,
        description: this.additionalInfoForm.value.description,
        uploads: (
          (this.ProfilePictureForm.value.profilePicture || []).map(media => ({
            id: this.user?.uploads?.filter(upload => upload?.media?.id == media.id)[0]?.id,
            media: media.id ? {id: media.id, mimeType: media.mimeType} : media,
            profilePicture: true,
            title: false
          })).concat(
            (this.titleImageForm.value.titleImage || []).map(media => ({
              id: this.user?.uploads?.filter(upload => upload?.media?.id == media.id)[0]?.id,
              media: media.id ? {id: media.id, mimeType: media.mimeType} : media,
              title: true,
              profilePicture: false
            }))
          )
        ) || null,       
      })
    );
  }

  public cancelled(): void {
    this.store.dispatch(UserSettingsActions.cancelled());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
