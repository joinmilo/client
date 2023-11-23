import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { id } from 'src/app/core/constants/queryparam.constants';
import { DealAdminCategoryFormActions } from '../state/deal-admin-category-form.actions';
import { selectEditableDealCategory } from '../state/deal-admin-category-form.selectors';

@Component({
  selector: 'app-deal-admin-category-form',
  templateUrl: './deal-admin-category-form.component.html',
  styleUrls: ['./deal-admin-category-form.component.scss']
})
export class DealAdminCategoryFormComponent implements OnInit, OnDestroy {

  public categoryForm = this.fb.group({
    id: ['' as Maybe<string>],
    name: ['' as Maybe<string>, [Validators.required]],
    icon: ['' as Maybe<string>, [Validators.required]],
    color: ['' as Maybe<string>, [Validators.required]],
  });

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) {}

  public ngOnInit(): void {
    this.activatedRoute?.parent?.params.pipe(
      filter(params => !!params[id]),
      tap((params) => this.store.dispatch(DealAdminCategoryFormActions.getCategory(params[id]))),
      switchMap(() => this.store.select(selectEditableDealCategory)),
      filter(category => !!category),
      takeUntil(this.destroy)
    ).subscribe(category => this.categoryForm = this.fb.group({
      id: [category?.id],
      name: [category?.name, [Validators.required]],
      icon: [category?.icon, [Validators.required]],
      color: [category?.color?.toString(), [Validators.required]],
    }));
  }

  public cancelled(): void {
    this.store.dispatch(DealAdminCategoryFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(DealAdminCategoryFormActions.save({
      id: this.categoryForm.value.id,
      name: this.categoryForm.value.name,
      icon: this.categoryForm.value.icon,
      color: this.categoryForm.value.color
    }));
  }

  public ngOnDestroy(): void {
    this.store.dispatch(DealAdminCategoryFormActions.cancelled());
    this.destroy.next();
    this.destroy.complete();

  }


}