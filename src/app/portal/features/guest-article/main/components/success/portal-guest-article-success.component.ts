import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { guestArticleSuccessConfig } from 'src/app/core/constants/core.constants';
import { selectConfiguration } from 'src/app/core/state/selectors/core.selectors';

@Component({
  selector: 'app-portal-guest-article-success',
  templateUrl: './portal-guest-article-success.component.html',
  styleUrls: ['./portal-guest-article-success.component.scss'],
})
export class PortalGuestArticleSuccessComponent {

  guestArticleSuccessPicture = this.store.select(selectConfiguration(guestArticleSuccessConfig));

  constructor(
    private store: Store
  ) { }
}

