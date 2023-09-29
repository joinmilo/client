import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, take, tap } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { id } from 'src/app/core/constants/queryparam.constants';
import { ContestAdminTypeFormActions } from '../state/contest-admin-type-form.actions';
import { selectEditableContestType } from '../state/contest-admin-type-form.selectors';

@Component({
  selector: 'app-contest-admin-type-form',
  templateUrl: './contest-admin-type-form.component.html',
  styleUrls: ['./contest-admin-type-form.component.scss']
})
export class ContestAdminTypeFormComponent implements OnInit, OnDestroy {

  public categoryForm = this.fb.group({
    id: ['' as Maybe<string>],
    code: ['' as Maybe<string>, [Validators.required]],
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
      tap((params) => this.store.dispatch(ContestAdminTypeFormActions.getCategory(params[id]))),
      switchMap(() => this.store.select(selectEditableContestType)),
      filter(category => !!category),
      take(1)
    ).subscribe(category => {
      this.categoryForm = this.fb.group({
        id: [category?.id],
        code: [category?.code, [Validators.required]],
      });
    });
  }

  public cancelled(): void {
    this.store.dispatch(ContestAdminTypeFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(ContestAdminTypeFormActions.save({
      id: this.categoryForm.value.id,
      code: this.categoryForm.value.code,
    }));
  }

  public ngOnDestroy(): void {
    this.store.dispatch(ContestAdminTypeFormActions.cancelled());
    this.destroy.next();
    this.destroy.complete();

  }
}