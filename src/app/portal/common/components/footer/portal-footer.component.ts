import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { Maybe, MenuItemEntity } from 'src/schema/schema';
import { CommonActions } from '../../state/common.actions';
import { selectMenu } from '../../state/common.selectors';

@Component({
  selector: 'app-portal-footer',
  templateUrl: './portal-footer.component.html',
  styleUrls: ['./portal-footer.component.scss']
})
export class PortalFooterComponent {

  public menu = this.store.select(selectMenu).pipe(
    tap(menu => !menu?.length && this.store.dispatch(CommonActions.getMenu()))
  );

  constructor(
    private store: Store,
  ) {
    this.store.dispatch(CommonActions.getApps());
    this.store.dispatch(CommonActions.getSocialMedia());
  }

  public navigate(item: Maybe<MenuItemEntity>) {
    this.store.dispatch(CommonActions.navigate(item));
  }
}



