import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { VerificationComponent } from './components/verification/verification.component';
import { verificationToken } from './constants/user.constants';

const routes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent
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

export class UserPortalRoutingModule { }
