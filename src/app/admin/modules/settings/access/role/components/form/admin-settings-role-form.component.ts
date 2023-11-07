import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, take, tap } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { id } from 'src/app/core/constants/queryparam.constants';
import { AdminSettingsRoleActions } from '../../state/admin-settings-role.actions';
import { selectEditableRole, selectPrivileges, selectUsers } from '../../state/admin-settings-role.selectors';

@Component({
  selector: 'app-admin-settings-role-form',
  templateUrl: './admin-settings-role-form.component.html',
  styleUrls: ['./admin-settings-role-form.component.scss']
})
export class AdminSettingsRoleFormComponent implements OnInit, OnDestroy {

  public form = this.fb.group({
    id: ['' as Maybe<string>],
    name: ['' as Maybe<string>, [Validators.required]],
    privileges: this.fb.control(null as Maybe<string[]>, [Validators.required]),
    users: this.fb.control(null as Maybe<string[]>),
  });

  public privileges = this.store.select(selectPrivileges);
  public users = this.store.select(selectUsers);

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.store.dispatch(AdminSettingsRoleActions.getPrivileges());
    this.store.dispatch(AdminSettingsRoleActions.getUsers());
  }

  public ngOnInit(): void {
    this.activatedRoute?.params.pipe(
      filter(params => !!params[id]),
      tap((params) => this.store.dispatch(AdminSettingsRoleActions.getRole(params[id]))),
      switchMap(() => this.store.select(selectEditableRole)),
      filter(role => !!role),
      take(1)
    ).subscribe(role => this.form.patchValue({
        id: role?.id,
        name: role?.name,
        privileges: role?.privileges?.map(privilege => privilege?.id as string) as string[],
        users: role?.users?.map(user => user?.id as string) as string[]
      }, { emitEvent: false })
    );
  }

  public cancelled(): void {
    this.store.dispatch(AdminSettingsRoleActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(AdminSettingsRoleActions.save({
      id: this.form.value.id,
      name: this.form.value.name,

      privileges: this.form.value.privileges?.map(id => ({
        id
      })),

      users: this.form.value.users?.map(id => ({
        id
      }))
    }));
  }

  public ngOnDestroy(): void {
    this.store.dispatch(AdminSettingsRoleActions.cancelled());
    this.destroy.next();
    this.destroy.complete();

  }


}