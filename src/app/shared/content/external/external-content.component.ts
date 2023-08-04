import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';

@Component({
  selector: 'app-external-content',
  styleUrls: ['external-content.component.scss'],
  templateUrl: 'external-content.component.html'
})
export class ExternalContentComponent {

  @Input()
  public hostname?: Maybe<string>;

  public rememberConsent: boolean = false;

  constructor(
    private store: Store) { }

  public loadExternalContent(): void {
    this.store.dispatch(CoreUserActions.allowExternalContent({
      allow: true,
      rememberConsent: this.rememberConsent
    }));
  }
}
