import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fadeInAnimation } from 'src/app/core/animations/animations';
import { SearchActions } from '../../state/search.actions';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss'],
  animations: [
    fadeInAnimation(),
  ]
})
export class PortalSearchButtonComponent {

  constructor(
    private store: Store
  ) { }

  public setSearching(event: MouseEvent) :void {
    event.stopPropagation();
    this.store.dispatch(SearchActions.setSearchState(true));
  }
}
