import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { InfoMediaCategoryEntity, Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MediaAdminFormActions } from '../state/media-admin-form.actions';
import { selectMediaCategories } from '../state/media-admin-form.selectors';

@Component({
  selector: 'app-media-admin-form',
  templateUrl: './media-admin-form.component.html',
  styleUrls: ['./media-admin-form.component.scss']
})
export class MediaAdminFormComponent implements OnInit, OnDestroy {

  public contentForm = this.fb.group({
    id: ['' as Maybe<string>],
    name: ['' as Maybe<string>, [Validators.required]],
    url: ['' as Maybe<string>],
    uploads: [[] as MediaEntity[], [Validators.required]],
    categoryId: [undefined as Maybe<string>, [Validators.required]],
    author: ['' as Maybe<string>],
  });

  public categories = this.store.select(selectMediaCategories);
  public editCategory: Maybe<InfoMediaCategoryEntity>;

  private destroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) { }

  public cancelled(): void {
    this.store.dispatch(MediaAdminFormActions.cancelled());
  }

  public ngOnInit(): void {
    this.store.dispatch(MediaAdminFormActions.getCategories());}

  public saved(): void {
    this.store.dispatch(MediaAdminFormActions.save({
      id: this.contentForm.value.id ?? null,
      media: this.contentForm.value.uploads?.[0],     
      category: this.contentForm.value.categoryId ?
      { id: this.contentForm.value.categoryId}
      :null
    }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }


}