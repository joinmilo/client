import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe, MenuItemEntity } from 'src/schema/schema';
import { CommonActions } from '../../state/common.actions';
import { selectMenu } from '../../state/common.selectors';

@Component({
  selector: 'app-portal-footer',
  templateUrl: './portal-footer.component.html',
  styleUrls: ['./portal-footer.component.scss']
})
export class PortalFooterComponent {

  public menu = this.store.select(selectMenu);

  constructor(
    private store: Store,
  ) { }

  public navigate(item: Maybe<MenuItemEntity>) {
    this.store.dispatch(CommonActions.navigate(item));
  }
}



