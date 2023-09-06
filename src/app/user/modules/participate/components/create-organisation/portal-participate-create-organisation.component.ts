import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { PortalParticipateActions } from '../../state/portal-participate.actions';


@Component({
  selector: 'app-portal-participate-create-organisation',
  templateUrl: './portal-participate-create-organisation.component.html',
  styleUrls: ['./portal-participate-create-organisation.component.scss']
})
export class PortalParticipateCreateOrganisationComponent {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  public profilePicture?: Maybe<MediaEntity>;
  public titleImage?: Maybe<MediaEntity>;

  public form = this.fb.group({
    name: ['', [Validators.required]],
    street: ['', [Validators.required]],
    housenumber: ['', [Validators.required]],
    city: ['', [Validators.required]],
    postalcode: ['', [Validators.required]],
    describtion: ['',],
    website: [''],
    phone: [''],
    email: ['', [Validators.required, Validators.email]],
    profilePic: [{} as MediaEntity, [Validators.required]],
    titleImg: [{} as MediaEntity, [Validators.required]],
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { }

  public addProfilePicture(uploads: MediaEntity[]): void {
    this.profilePicture = uploads[0];
  }

  public addTitleImage(uploads: MediaEntity[]): void {
    this.titleImage = uploads[0];
  }

  public onSubmit() {
    this.store.dispatch(PortalParticipateActions.saveOrganisationApplication({
      name: this.form.value.name,
      address: {
        street: this.form.value.street,
        houseNumber: this.form.value.housenumber,
        place: this.form.value.city,
        postalCode: this.form.value.postalcode,
      },
      contact: {
        email: this.form.value.email,
        website: this.form.value.website,
        phone: this.form.value.phone,
        preferredContact: true,
      },
      uploads: [
        {
        title: false,
        card: true,
        media: this.form.value.profilePic,
        },
        {
        title: true,
        card: false,
        media: this.form.value.titleImg,  
        } 
      ],
      description: this.form.value.describtion,
      slug: this.form.value.name,
      approved: false,
      sponsored: false,
    })); 
  }
}