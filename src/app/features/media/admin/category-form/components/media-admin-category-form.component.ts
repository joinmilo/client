import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { id } from 'src/app/core/constants/queryparam.constants';
import { MediaAdminCategoryFormActions } from '../state/media-admin-category-form.actions';
import { selectEditableMediaCategory } from '../state/media-admin-category-form.selectors';

@Component({
  selector: 'app-media-admin-category-form',
  templateUrl: './media-admin-category-form.component.html',
  styleUrls: ['./media-admin-category-form.component.scss']
})
export class MediaAdminCategoryFormComponent implements OnInit, OnDestroy {

  public categoryForm = this.fb.group({
    id: ['' as Maybe<string>],
    name: ['' as Maybe<string>, [Validators.required]],
  });

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.categoryForm.get('name')?.valueChanges.subscribe((value) => {
      console.log('Input value changed:', value);
    });
  }

  public ngOnInit(): void {
    console.log('Initial categoryForm value:', this.categoryForm.value);


    this.activatedRoute?.parent?.params.pipe(
      filter(params => !!params[id]),
      tap((params) => this.store.dispatch(MediaAdminCategoryFormActions.getCategory(params[id]))),
      switchMap(() => this.store.select(selectEditableMediaCategory)),
      filter(category => !!category),
      takeUntil(this.destroy)
    ).subscribe(category => {
      console.log("categ", category);
       this.categoryForm.patchValue({
        id: category?.id,
        name: category?.name
      });
    });
  }

  public cancelled(): void {
    this.store.dispatch(MediaAdminCategoryFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(MediaAdminCategoryFormActions.save({
      id: this.categoryForm.value.id,
      name: this.categoryForm.value.name,
    }));
  }

  public ngOnDestroy(): void {
    this.store.dispatch(MediaAdminCategoryFormActions.cancelled());
    this.destroy.next();
    this.destroy.complete();

  }
}