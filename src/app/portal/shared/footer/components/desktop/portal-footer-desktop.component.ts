import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe, MenuItemEntity } from 'src/schema/schema';
import { PortalMenuActions } from '../../../menu/state/portal-menu.actions';
import { selectPortalMenu } from '../../../menu/state/portal-menu.selectors';

@Component({
  selector: 'app-portal-footer-desktop',
  templateUrl: './portal-footer-desktop.component.html',
  styleUrls: ['./portal-footer-desktop.component.scss']
})
export class PortalFooterDesktopComponent {

  public menu = this.store.select(selectPortalMenu);

  constructor(
    private store: Store,
  ) { }
  
  public navigate(item: Maybe<MenuItemEntity>) {
    this.store.dispatch(PortalMenuActions.navigateMenu(item));
  }

}



