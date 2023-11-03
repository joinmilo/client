import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { AddressEntity, Maybe, MediaEntity, OrganisationEntity } from 'src/app/core/api/generated/schema';
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
    email: ['' as Maybe<string>, [Validators.required]],
    name: ['' as Maybe<string>],
    website: ['' as Maybe<string>],
    phone: ['' as Maybe<string>],
  });

  public addressForm = this.fb.group({
    address: [undefined as Maybe<AddressEntity>],
  });

  public titleImageForm = this.fb.group({
    titleImage: [[] as MediaEntity[], [Validators.required]],
  });

  public profileImageForm = this.fb.group({
    cardImage: [[] as MediaEntity[], [Validators.required]],
  });

  public uploadsForm = this.fb.group({
    uploads: [[] as MediaEntity[]],
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
        email: organisation?.contact?.email,
        name: organisation?.contact?.name,
        website: organisation?.contact?.website,
        phone: organisation?.contact?.phone,
      });

      this.addressForm.patchValue({
        address: organisation?.address
      });

      this.titleImageForm.patchValue({
        titleImage: 
          organisation?.uploads?.filter(upload => upload?.card).map(upload => upload?.media) as MediaEntity[]
      });

      this.profileImageForm.patchValue({
        cardImage: 
          organisation?.uploads?.filter(upload => upload?.card).map(upload => upload?.media) as MediaEntity[]
      });

      this.uploadsForm.patchValue({
        uploads: organisation?.uploads?.filter(upload => !upload?.title && !upload?.card)
          .map(upload => upload?.media) as MediaEntity[]
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
    contact: {
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      website: this.contactForm.value.website,
      preferredContact: false
    },
    address: this.addressForm.value.address,
    
    slug: this.descriptionForm.value.name,
    approved: false,
    commentsAllowed: this.additionalInfoForm.value.commentsAllowed,

    uploads: (this.uploadsForm.value.uploads || []).map(media => ({
        id: this.organisation?.uploads?.filter(upload => upload?.media?.id == media.id)[0]?.id,
        media: media,
      })).concat(
        (this.profileImageForm.value.cardImage || []).map(media => ({ 
          id: this.organisation?.uploads?.filter(upload => upload?.media?.id == media.id)[0]?.id,
          media: media,
          card: true,
        }))
      ).concat(
        (this.titleImageForm.value.titleImage || []).map(media => ({
          id: this.organisation?.uploads?.filter(upload => upload?.media?.id == media.id)[0]?.id,
          media: media,
          title: true,
        }))
      ) || null,
    }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
