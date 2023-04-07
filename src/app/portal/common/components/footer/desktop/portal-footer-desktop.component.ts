import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe, MenuItemEntity } from 'src/schema/schema';
import { CommonActions } from '../../../state/common.actions';
import { selectMenu } from '../../../state/common.selectors';

@Component({
  selector: 'app-portal-footer-desktop',
  templateUrl: './portal-footer-desktop.component.html',
  styleUrls: ['./portal-footer-desktop.component.scss']
})
export class PortalFooterDesktopComponent {

  public menu = this.store.select(selectMenu);

  constructor(
    private store: Store,
  ) { }
  
  public navigate(item: Maybe<MenuItemEntity>) {
    this.store.dispatch(CommonActions.navigateMenu(item));
  }

}



