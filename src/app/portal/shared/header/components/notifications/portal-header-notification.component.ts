import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portal-header-notification',
  templateUrl: './portal-header-notification.component.html',
  styleUrls: ['./portal-header-notification.component.scss'],
})
export class PortalHeaderNotificationComponent {
  @Input()
  public link?: string[];

  @Input()
  public linkLabel?: string;
}
