import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userUrl } from 'src/app/core/constants/module.constants';

@Component({
  selector: 'app-user-settings-menu',
  templateUrl: './user-settings-menu.component.html',
  styleUrls: ['./user-settings-menu.component.scss'],
})
export class UserSettingsMenuComponent {

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