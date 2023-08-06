import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';

@Component({
  selector: 'app-media-thirdparty-consent',
  styleUrls: ['media-thirdparty-consent.component.scss'],
  templateUrl: 'media-thirdparty-consent.component.html'
})
export class MediaThirdpartyConsentComponent {

  @Input()
  public externalUrl?: Maybe<string>;

  @Output()
  public allowed = new EventEmitter<void>();

  public rememberConsent = false;

  constructor(
    private store: Store) { }

  public loadExternalContent(): void {
    this.allowed.emit();
    if (this.rememberConsent) {
      this.store.dispatch(CoreUserActions.allowExternalContent());
    }
  }
}
