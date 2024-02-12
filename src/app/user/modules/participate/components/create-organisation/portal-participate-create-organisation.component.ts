import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppValidators } from 'ngx-cinlib/forms/validators';
import { AddressEntity, Maybe, OrganisationMediaEntity } from 'src/app/core/api/generated/schema';
import { PortalParticipateActions } from '../../state/portal-participate.actions';


@Component({
  selector: 'app-portal-participate-create-organisation',
  templateUrl: './portal-participate-create-organisation.component.html',
  styleUrls: ['./portal-participate-create-organisation.component.scss']
})
export class PortalParticipateCreateOrganisationComponent {

  public descriptionForm = this.fb.group({
    name: ['' as Maybe<string>, [Validators.required]],
    description: ['' as Maybe<string>, [Validators.required]],
  });

  public contactForm = this.fb.group({
    email: ['' as Maybe<string>, [Validators.required, AppValidators.email()]],
    name: ['' as Maybe<string>],
    website: ['' as Maybe<string>],
    phone: ['' as Maybe<string>, [AppValidators.phone()]],
  });

  public addressForm = this.fb.group({
    address: [undefined as Maybe<AddressEntity>],
  });

  public uploadsForm = this.fb.group({
    uploads: [[] as Maybe<OrganisationMediaEntity>[], [Validators.required]],
  }); 

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { }

  public cancelled(): void {
    this.store.dispatch(PortalParticipateActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(PortalParticipateActions.save({
    name: this.descriptionForm.value.name,
    description: this.descriptionForm.value.description,
    contact: {
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      website: this.contactForm.value.website,
      preferredContact: false
    },
    address: this.addressForm.value.address,
    slug: this.descriptionForm.value.name,
    approved: false,
    sponsored: false,
    uploads: this.uploadsForm.value.uploads
    }));
  }
}