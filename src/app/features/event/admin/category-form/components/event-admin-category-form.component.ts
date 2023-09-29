import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, take, tap } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { id } from 'src/app/core/constants/queryparam.constants';
import { EventAdminCategoryFormActions } from '../state/event-admin-category-form.actions';
import { selectEditableEventCategory } from '../state/event-admin-category-form.selectors';

@Component({
  selector: 'app-event-admin-category-form',
  templateUrl: './event-admin-category-form.component.html',
  styleUrls: ['./event-admin-category-form.component.scss']
})
export class EventAdminCategoryFormComponent implements OnInit, OnDestroy {

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
      tap((params) => this.store.dispatch(EventAdminCategoryFormActions.getCategory(params[id]))),
      switchMap(() => this.store.select(selectEditableEventCategory)),
      filter(category => !!category),
      take(1)
    ).subscribe(category => {
      this.categoryForm = this.fb.group({
        id: [category?.id],
        name: [category?.name, [Validators.required]],
        icon: [category?.icon, [Validators.required]],
        color: [category?.color?.toString(), [Validators.required]],
      });
    });   
  }

  public cancelled(): void {
    this.store.dispatch(EventAdminCategoryFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(EventAdminCategoryFormActions.save({
      id: this.categoryForm.value.id,
      name: this.categoryForm.value.name,
      icon: this.categoryForm.value.icon,
      color: this.categoryForm.value.color
    }));
  }

  public ngOnDestroy(): void {
    this.store.dispatch(EventAdminCategoryFormActions.cancelled());
    this.destroy.next();
    this.destroy.complete();

  }


}