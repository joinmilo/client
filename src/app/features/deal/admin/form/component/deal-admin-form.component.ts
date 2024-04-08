import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CinValidators } from 'ngx-cinlib/forms/validators';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { AddressEntity, ContactEntity, DealEntity, DealMediaEntity, Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { DealAdminFormActions } from '../state/deal-admin-form.actions';
import { selectCategories, selectDeal } from '../state/deal-portal-form.selectors';


@Component({
  selector: 'app-deal-admin-form',
  templateUrl: './deal-admin-form.component.html',
  styleUrls: ['./deal-admin-form.component.scss']
})
export class DealAdminFormComponent implements OnInit, OnDestroy {

  public contentForm = this.fb.group({
    id: [undefined as Maybe<string>],
    name: [undefined as Maybe<string>, [Validators.required]],
    categoryId: [undefined as Maybe<string>, [Validators.required]],
    content: [undefined as Maybe<string>, [Validators.required]],
  });

  public shortDescriptionForm = this.fb.group({
    shortDescription: ['' as Maybe<string>],
  });

  public additionalInfoForm = this.fb.group({
    price: ['' as Maybe<string>, [CinValidators.number]],
    isPublic: [true as Maybe<boolean>],
    selectedType: ['offer' as Maybe<string>]
  });

  public contactForm = this.fb.group({
    contact: [undefined as Maybe<ContactEntity>, [Validators.required]],
  });
  
  public locationForm = this.fb.group({
    address: [undefined as Maybe<AddressEntity>],
  });

  public uploadsForm = this.fb.group({
    uploads: [[] as Maybe<DealMediaEntity>[], [Validators.required]],
  });

  public categories = this.store.select(selectCategories);
  private currentUser?: Maybe<UserContextEntity>; 
  public deal?: Maybe<DealEntity>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) {}

public ngOnInit(): void {
    this.store.dispatch(DealAdminFormActions.getCategories());
    this.store.select(selectCurrentUser)
      .pipe(takeUntil(this.destroy))
      .subscribe(user => this.currentUser = user);

    this.activatedRoute?.parent?.params.pipe(
      filter(params => !!params[slug]),
      tap(params => this.store.dispatch(DealAdminFormActions.getDeal(params[slug]))),
      switchMap(() => this.store.select(selectDeal)),
      filter(deal => !!deal?.id),
      takeUntil(this.destroy)
    ).subscribe(deal => {
      this.deal = deal;

      this.contentForm.patchValue({
        id: deal?.id,
        name: deal?.name,
        categoryId: deal?.category?.id,
        content: deal?.content,
      });

      this.shortDescriptionForm.patchValue({
        shortDescription: deal?.shortDescription,
      });

      this.additionalInfoForm.patchValue({
        price: deal?.price?.toString(),
        isPublic: deal?.isPublic,
        selectedType: deal?.offer ? 'offer' : 'request'
      });

      this.locationForm.patchValue({
        address: deal?.address,
      });

      this.contactForm.patchValue({
        contact: deal?.contact,
      });

      this.uploadsForm.patchValue({
        uploads: deal?.uploads
      });
    });
  }

  public cancelled(): void {
    this.store.dispatch(DealAdminFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(DealAdminFormActions.save({
      id: this.contentForm.value.id,
      name: this.contentForm.value.name,
      content: this.contentForm.value.content,
      shortDescription: this.shortDescriptionForm.value.shortDescription,
      category: this.contentForm.value.categoryId != null
        ? { id: this.contentForm.value.categoryId }
        : null,
      address: this.locationForm.value.address,
      contact: this.contactForm.value.contact
        ? {
            name: this.contactForm.value.contact.name,
            email: this.contactForm.value.contact.email,
            phone: this.contactForm.value.contact.phone,
            website: this.contactForm.value.contact.website,
          }
        : null,
      creator: {
        id: this.currentUser?.id,
        user: {
          firstName: this.currentUser?.user?.firstName,
          lastName: this.currentUser?.user?.lastName,
        }
      },
      price: Number(this.additionalInfoForm.value.price?.replace(',','.')),
      isPublic: this.additionalInfoForm.value.isPublic,
      offer: this.additionalInfoForm.value.selectedType === 'offer' ? true : false,
      
      uploads: this.uploadsForm.value.uploads
    }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
