import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { CommonActions } from '../../../../portal/common/state/common.actions';
import { selectApps, selectMenu } from '../../../../portal/common/state/common.selectors';

@Component({
  selector: 'app-app-store-piece',
  templateUrl: './app-store-piece.component.html',
  styleUrls: ['./app-store-piece.component.scss'],
})

export class AppStorePieceComponent {

  constructor(
    private store: Store
  ) { }

  public apps = this.store.select(selectApps);

  public menu = this.store.select(selectMenu).pipe(
    tap(menu => !menu?.length && this.store.dispatch(CommonActions.getMenu()))
  );

}
