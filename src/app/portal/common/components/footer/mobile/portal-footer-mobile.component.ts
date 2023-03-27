import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { Maybe, MenuItemEntity } from 'src/schema/schema';
import { PortalMenuService } from '../../../services/portal-menu.service';
import { CommonActions } from '../../../state/common.actions';
import { selectMenu } from '../../../state/common.selectors';

@Component({
  selector: 'app-portal-footer-mobile',
  templateUrl: './portal-footer-mobile.component.html',
  styleUrls: ['./portal-footer-mobile.component.scss']
})
export class PortalFooterMobileComponent {

  public menu = this.store.select(selectMenu).pipe(
    tap(menu => !menu?.length && this.store.dispatch(CommonActions.getMenu()))
  );

  constructor(
    private store: Store,
    private menuService: PortalMenuService,
  ) { }

  public route(item: Maybe<MenuItemEntity>) {
    this.menuService.route(item);
  }
}



