import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { LanguageEntity, Maybe, MediaEntity, SuburbEntity, UserContextEntity } from 'src/app/core/api/generated/schema';
import { selectLanguages } from 'src/app/core/state/selectors/core.selectors';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';

import { UserSettingsActions } from '../../../state/user-settings.actions';
import { selectSuburbs } from '../../../state/user-settings.selectors';
import { UserMediaUploadProfilePictureComponent } from './media-upload/media-upload-profile-picture/user-media-upload-profile-picture.component';
import { UserMediaUploadTitleImageComponent } from './media-upload/media-upload-title-image/user-media-upload-title-image.component';


@Component({
  selector: 'app-user-personal-data-form',
  templateUrl: './user-personal-data-form.component.html',
  styleUrls: ['./user-personal-data-form.component.scss'],
})
export class UserPersonalDataFormComponent implements OnInit, OnDestroy{

  public form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],

    street: [''],
    houseNumber: [''],
    place: [''],
    postalCode: [''],
    suburb: [{} as SuburbEntity],

    language: [{} as LanguageEntity],
    description: [''],
  });

  public user?: Maybe<UserContextEntity>;

  public mediaTitle?: Maybe<MediaEntity>;

  public profilePicture?: Maybe<MediaEntity> | undefined;

  public currentUser = this.store.select(selectCurrentUser);

  public languages = this.store.select(selectLanguages)

  public suburbs = this.store.select(selectSuburbs);

  compareSuburbs(suburb1: SuburbEntity, suburb2: SuburbEntity) {
    return suburb1?.id === suburb2?.id;
  }

  compareLanguages(language1: LanguageEntity, language2: LanguageEntity) {
    return language1?.id === language2?.id
  }

  constructor(
    private dialog: MatDialog,
    private store: Store,
    private fb: FormBuilder,
    
  ) {

    this.store.dispatch(UserSettingsActions.getSuburbs());
    this.currentUser.subscribe(currentUser => {
      if (currentUser) {
        this.form.patchValue({
          firstName: currentUser?.user?.firstName,
          lastName: currentUser?.user?.lastName,
          email: currentUser?.user?.email,
          phone: currentUser?.user?.phone,

          street: currentUser?.address?.street,
          houseNumber: currentUser?.address?.houseNumber,
          place: currentUser?.address?.place,
          postalCode: currentUser?.address?.postalCode,
          suburb: currentUser?.address?.suburb,

          description: currentUser?.description,
          language: currentUser?.user?.language
        })
      }
    })
  }
 
  public onSubmit() {
    this.store.dispatch(UserSettingsActions.savePersonalData({
      id: this.user?.id,
      user: {
        id: this.user?.user?.id,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName, 
        email: this.form.value.email,
        phone: this.form.value.phone,
        language: {
          id: this.form.value.language?.id
        }
      },
      address: {
        street: this.form.value.street,
        houseNumber: this.form.value.houseNumber,
        place: this.form.value.place,
        postalCode: this.form.value.postalCode,
        suburb: {
          id: this.form.value.suburb?.id
        }
      },
      description: this.form.value.description,  
      uploads: [
        {
          title: false,
          profilePicture: true,
          userContext: {id: this.user?.id},
          media: this.profilePicture
        },
        {
          title: true,
          profilePicture: false,
          userContext: {id: this.user?.id},
          media: this.mediaTitle
        }
      ],
    })); 
  }

  private destroy = new Subject<void>();

  public ngOnInit(): void {
    this.store.select(selectCurrentUser)
      .pipe(takeUntil(this.destroy))
      .subscribe(user => {
        this.user = user;
        this.profilePicture = user?.uploads?.find(upload => upload?.profilePicture)?.media;
        this.mediaTitle = user?.uploads?.find(upload => upload?.title)?.media;
        });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  openDialogProfilePicture() {
    const dialogRef = this.dialog.open(UserMediaUploadProfilePictureComponent);

     dialogRef.componentInstance.profilePictureChanged.subscribe((newProfilePicture: MediaEntity) => {
      this.profilePicture = newProfilePicture;
    });
  }

  openDialogTitleImage() {
    const dialogRef = this.dialog.open(UserMediaUploadTitleImageComponent);

     dialogRef.componentInstance.mediaTitleChanged.subscribe((newMediaTitle: MediaEntity) => {
      this.mediaTitle = newMediaTitle;
    });
  }
}