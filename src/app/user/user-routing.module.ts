import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SendPasswordResetComponent } from './components/password-reset/send-password-reset.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';
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
    path: 'password-reset',
    component: SendPasswordResetComponent
  },
  {
    path: `new-password/:${resetToken}`,
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
