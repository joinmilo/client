import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';

@Component({
  selector: 'app-media-external-consent',
  styleUrls: ['media-external-consent.component.scss'],
  templateUrl: 'media-external-consent.component.html'
})
export class MediaExternalConsentComponent {

  @Input()
  public externalUrl?: Maybe<string>;

  @Output()
  public allowed = new EventEmitter<void>();

  public rememberConsent = false;

  constructor(
    private store: Store) { }

  public loadExternalContent(event: UIEvent): void {
    event.stopPropagation();
    this.allowed.emit();
    if (this.rememberConsent) {
      this.store.dispatch(CoreUserActions.saveCookieSettingExternalContent(
        true
      ));
    }
  }
}
