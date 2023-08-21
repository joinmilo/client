import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { dataProtectionConfig } from 'src/app/core/constants/core.constants';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { selectConfiguration } from 'src/app/core/state/selectors/core.selectors';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss'],
})
export class CookieComponent {

  public dataProtectionConfig = this.store.select(selectConfiguration(dataProtectionConfig));

  public cookieSettings = false;

  public form = this.fb.group({
    externalContent: [false, [Validators.required]],
    preferences: [false, [Validators.required]],
    statistics: [false, [Validators.required]],
  });


  constructor(
    private store: Store, private fb: FormBuilder) { }

  public acceptAllCookies(): void {
    this.store.dispatch(CoreUserActions.saveCookieSettings({
      externalContent: true,
      statistics: true,
      preferences: true
    }))
  }

  public declineOptionalCookies(): void {
    this.store.dispatch(CoreUserActions.saveCookieSettings({
      externalContent: false,
      statistics: false,
      preferences: false
    }))
  }

  public acceptSelectedCookies(): void {
    this.store.dispatch(CoreUserActions.saveCookieSettings({
      externalContent: this.form.value.externalContent,
      statistics: this.form.value.statistics,
      preferences: this.form.value.preferences
    }))
  }
}
