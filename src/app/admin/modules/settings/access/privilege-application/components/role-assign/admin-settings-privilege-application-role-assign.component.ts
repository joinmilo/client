import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Maybe, PrivilegeApplicationEntity } from 'src/app/core/api/generated/schema';

import { FormBuilder, Validators } from '@angular/forms';
import { AdminSettingsPrivilegeApplicationActions } from '../../state/admin-settings-privilege-application.actions';
import { selectRoles } from '../../state/admin-settings-privilege-application.selectors';


@Component({
  selector: 'app-admin-settings-privilege-application-role-assign',
  templateUrl: './admin-settings-privilege-application-role-assign.component.html',
  styleUrls: ['./admin-settings-privilege-application-role-assign.component.scss'],
})
export class AdminSettingsPrivilegeApplicationRoleAssignComponent {
  
  public roles = this.store.select(selectRoles)

  public form = this.fb.group({
    userId: [this.application?.user?.id as Maybe<string>],
    roleId: ['' as Maybe<string>, [Validators.required]],
  });
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public application: PrivilegeApplicationEntity, 
    private fb: FormBuilder,
    private store: Store,
    ) { 
      this.store.dispatch(AdminSettingsPrivilegeApplicationActions.getRoles(this.application.privilege?.id));
    }

  public saved(): void {
    this.store.dispatch(AdminSettingsPrivilegeApplicationActions.assignRole(
      this.form.value.roleId,
      this.form.value.userId,
      this.application?.id
    ));
  }
}