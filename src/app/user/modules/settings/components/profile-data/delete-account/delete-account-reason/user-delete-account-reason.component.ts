import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, takeUntil } from 'rxjs';
import { UserDeletionTypeEntity } from 'src/app/core/api/generated/schema';
import { UserSettingsActions } from '../../../../state/user-settings.actions';
import { deletionTypes } from '../../../../state/user-settings.selectors';

@Component({
  selector: 'app-user-delete-account-reason',
  templateUrl: './user-delete-account-reason.component.html',
  styleUrls: ['./user-delete-account-reason.component.scss'],
})
export class UserDeleteAccountReasonComponent implements OnInit, OnDestroy{
  
  public form = this.fb.group({
    types: [[] as UserDeletionTypeEntity, [Validators.required]],
  });
 
  public selectedDeletionTypes: Maybe<UserDeletionTypeEntity>[] = [];

  public types?: Maybe<UserDeletionTypeEntity[]>;

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {
    this.store.dispatch(UserSettingsActions.getUserDeletionTypes());
  }

  public ngOnInit(): void {
    this.store.select(deletionTypes)
      .pipe(takeUntil(this.destroy))
      .subscribe(types => this.types = types);
  }

  public toggleSelectedDeletionType(type: Maybe<UserDeletionTypeEntity>, checked: boolean): void {
    checked
    ? this.selectedDeletionTypes?.push(type)
    : this.selectedDeletionTypes = this.selectedDeletionTypes?.filter(item => item !== type)
  }

  public onSubmit() {
    this.store.dispatch(
    UserSettingsActions.saveUserDeletionTypes(
    this.selectedDeletionTypes
    ));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}