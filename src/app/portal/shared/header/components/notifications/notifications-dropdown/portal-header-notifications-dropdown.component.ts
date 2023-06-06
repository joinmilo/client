import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portal-header-notifications-dropdown',
  templateUrl: './portal-header-notifications-dropdown.component.html',
  styleUrls: ['./portal-header-notifications-dropdown.component.scss'],
})
export class PortalHeaderNotificationsDropdownComponent {
  @Input()
  public link?: string[];

  @Input()
  public linkLabel?: string;
}
