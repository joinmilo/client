import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/base/login.component';
import { SendPasswordResetComponent } from './components/login/reset-password/send-password-reset/send-password-reset.component';
import { SetNewPasswordComponent } from './components/login/reset-password/set-new-password/set-new-password.component';
import { RegistrationComponent } from './components/registration/base/registration.component';
import { VerificationComponent } from './components/verification/verification.component';
import { resetToken, verificationToken } from './constants/user.constants';

const routes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'sendPasswordReset',
    component: SendPasswordResetComponent
  },

  {
    path: `setNewPassword/:${resetToken}`,
    component: SetNewPasswordComponent
  },

  {
    path: `verification/:${verificationToken}`,
    component: VerificationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserPortalRoutingModule {}
