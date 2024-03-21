import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';

@Component({
  selector: 'app-admin-header-desktop',
  templateUrl: './admin-header-desktop.component.html',
  styleUrls: ['./admin-header-desktop.component.scss'],
})
export class AdminHeaderDesktopComponent{

  public currentUser= this.store.select(selectCurrentUser);

  constructor(
    private store: Store,
  ) {}


}