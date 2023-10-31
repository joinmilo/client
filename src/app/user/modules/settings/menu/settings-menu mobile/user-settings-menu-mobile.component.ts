import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userUrl } from 'src/app/core/constants/module.constants';

@Component({
  selector: 'app-user-settings-menu-mobile',
  templateUrl: './user-settings-menu-mobile.component.html',
  styleUrls: ['./user-settings-menu-mobile.component.scss'],
})
export class UserSettingsMenuMobileComponent {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  public route(route?: string): void {
    this.router.navigate([userUrl, 'settings', route])  
  }

  constructor(
    private router: Router
  ){}
}