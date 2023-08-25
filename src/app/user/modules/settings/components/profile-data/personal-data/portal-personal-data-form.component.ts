import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectLanguages } from 'src/app/core/state/selectors/core.selectors';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { LanguageEntity, Maybe, MediaEntity, UserContextEntity } from 'src/schema/schema';
import { PortalSettingsActions } from '../../../state/portal-settings.actions';

@Component({
  selector: 'app-portal-personal-data-form',
  templateUrl: './portal-personal-data-form.component.html',
  styleUrls: ['./portal-personal-data-form.component.scss'],
})
export class PortalPersonalDataFormComponent {

  public form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],

    street: [''],
    houseNumber: [''],
    place: [''],
    postalCode: [''],
    suburb: [''],

    language: [{} as LanguageEntity, [Validators.required]],
    description: [''],
  });

  public user?: Maybe<UserContextEntity>;

  public mediaTitle?: Maybe<MediaEntity> | undefined;

  public currentUser = this.store.select(selectCurrentUser);

  public languages = this.store.select(selectLanguages)


  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { 
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
          suburb: currentUser?.address?.suburb?.name,

          description: currentUser?.description,
        })
      }
    })
  }
  
  
  public changeLanguage(language: LanguageEntity) {
    this.store.dispatch(CoreActions.changeLanguage(language));
  }

  public onSubmit() {
    this.store.dispatch(PortalSettingsActions.savePersonalData({
      user: {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName, 
        email: this.form.value.email,
        phone: this.form.value.phone,
      },
      address: {
        street: this.form.value.street,
        houseNumber: this.form.value.houseNumber,
        place: this.form.value.place,
        postalCode: this.form.value.postalCode,
        suburb: {
          name: this.form.value.suburb
        }
      },
      description: this.form.value.description,    
    })); 
  }
}