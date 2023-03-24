import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonActions } from '../../state/common.actions';

@Component({
  selector: 'app-portal-footer',
  templateUrl: './portal-footer.component.html',
  styleUrls: ['./portal-footer.component.scss']
})
export class PortalFooterComponent {

  constructor(
    private store: Store,
  ) {
    this.store.dispatch(CommonActions.getApps());
    this.store.dispatch(CommonActions.getSocialMedia());
  }
}



