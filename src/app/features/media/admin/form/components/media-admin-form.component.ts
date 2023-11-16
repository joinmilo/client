import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { InfoMediaCategoryEntity, Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { id } from 'src/app/core/constants/queryparam.constants';
import { MediaAdminFormActions } from '../state/media-admin-form.actions';
import { selectEditableMedia, selectMediaCategories } from '../state/media-admin-form.selectors';

@Component({
  selector: 'app-media-admin-form',
  templateUrl: './media-admin-form.component.html',
  styleUrls: ['./media-admin-form.component.scss']
})
export class MediaAdminFormComponent implements OnInit, OnDestroy {

  public contentForm = this.fb.group({
    id: ['' as Maybe<string>],
    media: [[] as Maybe<MediaEntity>[], [Validators.required]],
    categoryId: [undefined as Maybe<string>, [Validators.required]],
  });

  public categories = this.store.select(selectMediaCategories);
  public editCategory: Maybe<InfoMediaCategoryEntity>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) { }
  
  public ngOnInit(): void {
    this.store.dispatch(MediaAdminFormActions.getCategories());
    
    this.activatedRoute?.parent?.params.pipe(
      filter(params => !!params[id]),
      tap(params => this.store.dispatch(MediaAdminFormActions.getMedia(params[id]))),
      switchMap(() => this.store.select(selectEditableMedia)),
      filter(media => !!media?.id),
      takeUntil(this.destroy)
    ).subscribe(infoMedia => {

      this.contentForm.patchValue({
        id: infoMedia?.id,
        categoryId: infoMedia?.category?.id,
        media: [infoMedia?.media]
      })
    }) 
  }

  public cancelled(): void {
    this.store.dispatch(MediaAdminFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(MediaAdminFormActions.save({
      id: this.contentForm.value.id ?? null,
      category: this.contentForm.value.categoryId ?
      { id: this.contentForm.value.categoryId}
      :null,
      media: this.contentForm.value.media?.[0],     
    }))
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}