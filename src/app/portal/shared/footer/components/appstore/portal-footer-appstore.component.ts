import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectApps } from '../../state/portal-footer.selectors';

@Component({
  selector: 'app-portal-footer-appstore',
  templateUrl: './portal-footer-appstore.component.html',
  styleUrls: ['./portal-footer-appstore.component.scss'],
})

export class PortalFooterAppStoreComponent {

  public apps = this.store.select(selectApps);

  constructor(
    private store: Store
  ) { }

}
