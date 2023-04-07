import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe, MenuItemEntity } from 'src/schema/schema';
import { CommonActions } from '../../../state/common.actions';
import { selectMenu } from '../../../state/common.selectors';

@Component({
  selector: 'app-portal-menu-accordion',
  templateUrl: './portal-menu-accordion.component.html',
  styleUrls: ['./portal-menu-accordion.component.scss']
})
export class PortalMenuAccordionComponent {

  public menu = this.store.select(selectMenu);

  constructor(
    private store: Store,
  ) { }
  
  public navigate(item: Maybe<MenuItemEntity>) {
    this.store.dispatch(CommonActions.navigateMenu(item));
  }
}
