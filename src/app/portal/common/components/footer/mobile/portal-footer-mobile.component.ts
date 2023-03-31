import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Maybe, MenuItemEntity } from 'src/schema/schema';

@Component({
  selector: 'app-portal-footer-mobile',
  templateUrl: './portal-footer-mobile.component.html',
  styleUrls: ['./portal-footer-mobile.component.scss']
})
export class PortalFooterMobileComponent {

  @Input()
  public menu?: Maybe<MenuItemEntity[]>

  @Output()
  public menuClicked = new EventEmitter<Maybe<MenuItemEntity>>();
}



