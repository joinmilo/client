import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, MediaEntity, PageEntity } from 'src/app/core/api/generated/schema';

import { ActivatedRoute } from '@angular/router';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { AdminSettingsPageFormActions } from '../state/admin-settings-page-form.actions';
import { selectPageForm } from '../state/admin-settings-page-form.selectors';

@Component({
  selector: 'app-admin-settings-page-form',
  templateUrl: './admin-settings-page-form.component.html',
  styleUrls: ['./admin-settings-page-form.component.scss'],
})
export class AdminSettingsPageFormComponent implements OnInit, OnDestroy{

  public contentForm = this.fb.group({
    id: ['' as Maybe<string>],
    name: ['' as Maybe<string>, [Validators.required]],
    content: ['' as Maybe<string>],
  });

  public shortDescriptionForm = this.fb.group({
    shortDescription: ['' as Maybe<string>],
  });

  public titleImageForm = this.fb.group({
    titleImage: [[] as MediaEntity[], [Validators.required]],
  });

  public uploadsForm = this.fb.group({
    uploads: [[] as MediaEntity[]],
  });

  public additionalInfoForm = this.fb.group({
    metaDescription: ['' as Maybe<string>],
    callText: ['' as Maybe<string>], 
    callUrl: ['' as Maybe<string>], 
  });

  public page?: Maybe<PageEntity>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute?.parent?.params.pipe(
      filter(params => !!params[slug]),
      tap(params => this.store.dispatch(AdminSettingsPageFormActions.getPage(params[slug]))),
      switchMap(() => this.store.select(selectPageForm)),
      filter(page => !!page?.id),
      takeUntil(this.destroy)
    ).subscribe(page => {

      this.contentForm.patchValue({
        id: page?.id,
        name: page?.name,
        content: page?.content,
      });
  
      this.shortDescriptionForm.patchValue({
        shortDescription: page?.shortDescription,
      });

      this.titleImageForm.patchValue({
        titleImage: page?.uploads?.filter(upload => upload?.title).map(upload => upload?.media) as MediaEntity[]
      });

      this.uploadsForm.patchValue({
        uploads: page?.uploads?.filter(upload => !upload?.media)
          .map(upload => upload?.media) as MediaEntity[]
      });

      this.additionalInfoForm.patchValue({
        metaDescription: page?.metaDescription,
        callText: page?.callText,
        callUrl: page?.callUrl
      });
    });
  }


  public cancelled(): void {
    this.store.dispatch(AdminSettingsPageFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(AdminSettingsPageFormActions.save({
      id: this.contentForm.value.id,
      name: this.contentForm.value.name,
      content: this.contentForm.value.content,
      shortDescription: this.shortDescriptionForm.value.shortDescription,
      metaDescription: this.additionalInfoForm.value.metaDescription,
      callText: this.additionalInfoForm.value.callText,
      callUrl: this.additionalInfoForm.value.callUrl,
      isLanding: false,
      uploads: (this.uploadsForm.value.uploads || []).map(media => ({
        id: this.page?.uploads?.filter(upload => upload?.media?.id == media.id)[0]?.id,
        media: media,
      })).concat(
        (this.titleImageForm.value.titleImage || []).map(media => ({
          id: this.page?.uploads?.filter(upload => upload?.media?.id == media.id)[0]?.id,
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