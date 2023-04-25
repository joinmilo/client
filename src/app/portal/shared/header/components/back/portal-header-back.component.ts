import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-portal-header-back',
  templateUrl: './portal-header-back.component.html',
  styleUrls: ['./portal-header-back.component.scss'],
})
export class PortalHeaderBackComponent {

  constructor(
    private navigationService: NavigationService,
  ) { }

  public back(): void {
    this.navigationService.back();
  }

}