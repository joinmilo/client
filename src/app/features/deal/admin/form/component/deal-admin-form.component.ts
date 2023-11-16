import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { AddressEntity, DealEntity, DealMediaEntity, Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { AppValidators } from 'src/app/core/validators/validators';
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
    content: [undefined as Maybe<string>, [Validators.required]],
  });

  public shortDescriptionForm = this.fb.group({
    shortDescription: ['' as Maybe<string>],
  });

  public additionalInfoForm = this.fb.group({
    categoryId: [undefined as Maybe<string>, [Validators.required]],
    price: [undefined as Maybe<number>],
    isPublic: [true as Maybe<boolean>],
    selectedType: ['offer' as Maybe<string>]
  });

  public locationForm = this.fb.group({
    address: [undefined as Maybe<AddressEntity>],
  });

  public contactForm = this.fb.group({
    email: [undefined as Maybe<string>, [Validators.required, AppValidators.email()]],
    phone: [undefined as Maybe<string>, [AppValidators.phone()]],
    name: [undefined as Maybe<string>],
    website: [undefined as Maybe<string>],
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
        content: deal?.content,
      });

      this.shortDescriptionForm.patchValue({
        shortDescription: deal?.shortDescription,
      });

      this.additionalInfoForm.patchValue({
        categoryId: deal?.category?.id,
        price: deal?.price,
        isPublic: deal?.isPublic,
        selectedType: deal?.offer ? 'offer' : 'request'
      });

      this.locationForm.patchValue({
        address: deal?.address,
      });

      this.contactForm.patchValue({
        email: deal?.contact?.email,
        phone: deal?.contact?.phone,
        name: deal?.contact?.name,
        website: deal?.contact?.website
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
      category: this.additionalInfoForm.value.categoryId != null
        ? { id: this.additionalInfoForm.value.categoryId }
        : null,
      address: this.locationForm.value.address,
      contact: {
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        name: this.contactForm.value.name,
        website: this.contactForm.value.website,
        preferredContact: true
      },
      creator: {
        id: this.currentUser?.id,
        user: {
          firstName: this.currentUser?.user?.firstName,
          lastName: this.currentUser?.user?.lastName,
        }
      },
      price: this.additionalInfoForm.value.price,
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
