import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserChangePasswordComponent } from './components/profile-data/change-password/user-change-password.component';
import { UserDeleteAccountConfirmationComponent } from './components/profile-data/delete-account/delete-account-confirmation/user-delete-account-confirmation.component';
import { UserDeleteAccountDescriptionComponent } from './components/profile-data/delete-account/delete-account-description/user-delete-account-description.component';
import { UserDeleteAccountReasonComponent } from './components/profile-data/delete-account/delete-account-reason/user-delete-account-reason.component';
import { UserPersonalDataFormComponent } from './components/profile-data/personal-data/user-personal-data-form.component';


const routes: Routes = [
  {
    path: 'change-password',
    component: UserChangePasswordComponent,
  },
  {
    path: 'delete-account-confirmation',
    component: UserDeleteAccountConfirmationComponent,
  },
  {
    path: 'delete-account-description',
    component: UserDeleteAccountDescriptionComponent,
  },
  {
    path: 'delete-account-reason',
    component: UserDeleteAccountReasonComponent,
  },
  {
    path: 'personal-data',
    component: UserPersonalDataFormComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'personal-data',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSettingsRoutingModule { }
