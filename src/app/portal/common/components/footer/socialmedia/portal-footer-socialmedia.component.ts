import { Component } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';
import { Maybe } from 'src/schema/schema';
import { selectSocialMedia } from '../../../state/common.selectors';

@Component({
  selector: 'app-portal-footer-socialmedia',
  templateUrl: './portal-footer-socialmedia.component.html',
  styleUrls: ['./portal-footer-socialmedia.component.scss'],
})
export class PortalFooterSocialMediaComponent {

  public socialMedia = this.store.select(selectSocialMedia);

  constructor(
    private store: Store,
  ) { }

  public icon(name?: Maybe<string>) {
    return name as IconName;
  }

}
