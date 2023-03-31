import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Maybe, MenuItemEntity } from 'src/schema/schema';

@Component({
  selector: 'app-portal-footer-desktop',
  templateUrl: './portal-footer-desktop.component.html',
  styleUrls: ['./portal-footer-desktop.component.scss']
})
export class PortalFooterDesktopComponent {

  @Input()
  public menu?: Maybe<MenuItemEntity[]>;

  @Output()
  public menuClicked = new EventEmitter<Maybe<MenuItemEntity>>();

}



