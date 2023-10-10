import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
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
    categoryId: [undefined as Maybe<string>],
    price: [undefined as Maybe<number>],
    isPublic: [true as Maybe<boolean>],
    selectedType: ['offer' as Maybe<string>]
  });

  public contactForm = this.fb.group({
    email: [undefined as Maybe<string>, [Validators.required]],
    phone: [undefined as Maybe<string>],
    name: [undefined as Maybe<string>],
    website: [undefined as Maybe<string>],
  });

  public titleImageForm = this.fb.group({
    titleImage: [[] as MediaEntity[], [Validators.required]],
  });

  public cardImageForm = this.fb.group({
    cardImage: [[] as MediaEntity[], [Validators.required]],
  });

  public uploadsForm = this.fb.group({
    uploads: [[] as MediaEntity[]],
  });

  public categories = this.store.select(selectCategories);

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) {}

public ngOnInit(): void {
    this.store.dispatch(DealAdminFormActions.getCategories());

    this.activatedRoute?.parent?.params.pipe(
      filter(params => !!params[slug]),
      tap(params => this.store.dispatch(DealAdminFormActions.getDeal(params[slug]))),
      switchMap(() => this.store.select(selectDeal)),
      filter(deal => !!deal?.id),
      takeUntil(this.destroy)
    ).subscribe(deal => {
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

      this.contactForm.patchValue({
        email: deal?.contact?.email,
        phone: deal?.contact?.phone,
        name: deal?.contact?.name,
        website: deal?.contact?.website
      });

      this.titleImageForm.patchValue({
        titleImage: deal?.uploads?.filter(upload => upload?.title).map(upload => upload?.media) as MediaEntity[],
      });

      this.cardImageForm.patchValue({
        cardImage: 
          deal?.uploads?.filter(upload => upload?.card).map(upload => upload?.media) as MediaEntity[],
      });

      this.uploadsForm.patchValue({
        uploads: deal?.uploads?.filter(upload => !upload?.title && !upload?.card)
          .map(upload => upload?.media) as MediaEntity[],
      });
    });
  }

  public cancelled(): void {
    this.store.dispatch(DealAdminFormActions.cancelled());
  }

  public saved(): void {
    console.log(this.additionalInfoForm.value.selectedType);
    this.store.dispatch(DealAdminFormActions.save({
      id: this.contentForm.value.id,
      name: this.contentForm.value.name,
      content: this.contentForm.value.content,
      shortDescription: this.shortDescriptionForm.value.shortDescription,
      category: this.additionalInfoForm.value.categoryId != null
        ? { id: this.additionalInfoForm.value.categoryId }
        : null,
      contact: {
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        name: this.contactForm.value.name,
        website: this.contactForm.value.website,
        preferredContact: true
      },
      price: this.additionalInfoForm.value.price,
      isPublic: this.additionalInfoForm.value.isPublic,
      offer: this.additionalInfoForm.value.selectedType === 'offer' ? true : false,
      sponsored: false,
      
      uploads: (this.uploadsForm.value.uploads || []).map(media => ({
        media: media,
      })).concat(
        (this.cardImageForm.value.cardImage || []).map(media => ({ 
          media: media,
          card: true,
        }))
      ).concat(
        (this.titleImageForm.value.titleImage || []).map(media => ({
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
