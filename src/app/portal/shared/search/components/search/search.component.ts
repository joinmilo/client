import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { fadeInAnimation, growOnSidesAnimation } from 'src/app/core/animations/animations';
import { SearchActions } from '../../state/search.actions';
import { selectIsSearching } from '../../state/search.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    fadeInAnimation,
    growOnSidesAnimation,
  ]
})
export class PortalSearchComponent {
  
  public isSearching = this.store.select(selectIsSearching);

  constructor(
    private store: Store,
  ) { }
  
  @HostListener('document:click')
  public outsideClick(): void {
    this.store.dispatch(SearchActions.setSearchState(false));
  }
}
