import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageActions } from '../../../features/page/state/page.actions';
import { selectCurrentPage } from '../../../features/page/state/page.selectors';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class PortalSearchResultComponent {

  public page = this.store.select(selectCurrentPage);

  constructor(
    private store: Store,
  ) {
    this.store.dispatch(PageActions.getLandingPage());
  }
}
