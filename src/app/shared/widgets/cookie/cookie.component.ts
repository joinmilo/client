import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { selectConfiguration } from 'src/app/core/state/selectors/core.selectors';
import { dataProtectionConfig } from './../../../core/constants/core.constants';


@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss'],
})
export class CookieComponent {

  public dataProtectionConfig = this.store.select(selectConfiguration(dataProtectionConfig));

  public cookieSettings = false;

  public necessary = true;

  public externalContent = true;

  public preferences = true;

  public statistics = true;

  constructor(private store: Store) { }

  acceptAllCookies() {
    this.store.dispatch(CoreUserActions.saveCookieSettings({
      externalContent: true,
      statistics: true,
      preferences: true
    }))
  }

  declineOptionalCookies() {
    this.store.dispatch(CoreUserActions.saveCookieSettings({
      externalContent: false,
      statistics: false,
      preferences: false
    }))
  }

  acceptSelectedCookies() {
    this.store.dispatch(CoreUserActions.saveCookieSettings({
      externalContent: this.externalContent,
      statistics: this.statistics,
      preferences: this.preferences
    }))
  }
}
