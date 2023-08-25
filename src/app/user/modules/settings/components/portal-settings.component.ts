import { Component } from '@angular/core';

@Component({
  selector: 'app-portal-settings',
  templateUrl: './portal-settings.component.html',
  styleUrls: ['./portal-settings.component.scss']
})
export class PortalSettingsComponent {

  // componentVisibility: ComponentVisibility = {
  //   personalData: false,
  //   changePassword: false,
  //   deleteAccount: false
  // };

  // setComponentVisibility(component: keyof ComponentVisibility) {
  //   for (const key in this.componentVisibility) {
  //     if (key === component) {
  //       this.componentVisibility[key] = true;
  //     } else {
  //       this.componentVisibility[key] = false;
  //     }
  //   }
  // }

  showPersonalDataForm = false;
  showChangePasswordForm = false;
  showDeleteAccountForm = false;

  showPersonalData() {
    this.showPersonalDataForm = true;
    this.showChangePasswordForm = false;
    this.showDeleteAccountForm = false;
  }

  showChangePassword() {
    this.showPersonalDataForm = false;
    this.showChangePasswordForm = true;
    this.showDeleteAccountForm = false;
  }

  showDeleteAccount() {
    this.showPersonalDataForm = false;
    this.showChangePasswordForm = false;
    this.showDeleteAccountForm = true;
  }


}


