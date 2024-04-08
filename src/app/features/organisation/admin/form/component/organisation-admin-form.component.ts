import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { AddressEntity, ContactEntity, Maybe, OrganisationEntity, OrganisationMediaEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { OrganisationAdminFormActions } from '../state/organisation-admin-form.actions';
import { selectEditableOrganisation } from '../state/organisation-admin-form.selectors';

@Component({
  selector: 'app-organisation-admin-form',
  templateUrl: './organisation-admin-form.component.html',
  styleUrls: ['./organisation-admin-form.component.scss']
})
export class OrganisationAdminFormComponent implements OnInit, OnDestroy{

  public descriptionForm = this.fb.group({
    id: ['' as Maybe<string>],
    name: ['' as Maybe<string>, [Validators.required]],
    description: ['' as Maybe<string>, [Validators.required]],
  });

  public contactForm = this.fb.group({
    contact: [undefined as Maybe<ContactEntity>, [Validators.required]],
  });

  public addressForm = this.fb.group({
    address: [undefined as Maybe<AddressEntity>],
  });

  public uploadsForm = this.fb.group({
    uploads: [[] as Maybe<OrganisationMediaEntity>[], [Validators.required]],
  });

  public additionalInfoForm = this.fb.group({
    commentsAllowed: [undefined as Maybe<boolean>],
  });

  private destroy = new Subject<void>();  
  private organisation?: Maybe<OrganisationEntity>;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute?.parent?.params.pipe(
      filter(params => !!params[slug]),
      tap(params => this.store.dispatch(OrganisationAdminFormActions.getOrganisation(params[slug]))),
      switchMap(() => this.store.select(selectEditableOrganisation)),
      filter(organisation => !!organisation?.id),
      takeUntil(this.destroy)
    ).subscribe(organisation => {
      this.organisation = organisation;

      this.descriptionForm.patchValue({
        id: organisation?.id,
        name: organisation?.name,
        description: organisation?.description
      });

      this.contactForm.patchValue({
        contact: organisation?.contact,
      });

      this.addressForm.patchValue({
        address: organisation?.address
      });

      this.uploadsForm.patchValue({
        uploads: organisation?.uploads
      });

      this.additionalInfoForm.patchValue({
        commentsAllowed: organisation?.commentsAllowed
      })
    });
  }  

  public cancelled(): void {
    this.store.dispatch(OrganisationAdminFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(OrganisationAdminFormActions.save({
    id: this.organisation?.id,
    name: this.descriptionForm.value.name,
    description: this.descriptionForm.value.description,
    contact: this.contactForm.value.contact
      ? {
          name: this.contactForm.value.contact.name,
          email: this.contactForm.value.contact.email,
          phone: this.contactForm.value.contact.phone,
          website: this.contactForm.value.contact.website,
        }
      : null,
    address: this.addressForm.value.address,
    
    slug: this.descriptionForm.value.name,
    commentsAllowed: this.additionalInfoForm.value.commentsAllowed,
    
    uploads: this.uploadsForm.value.uploads
    }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
