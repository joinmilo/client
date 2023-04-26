import { Component, HostListener, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { fadeInAnimation, growOnSidesAnimation } from 'src/app/core/animations/animations';
import { SearchActions } from '../../state/search.actions';
import { selectIsSearching } from '../../state/search.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    fadeInAnimation(),
    growOnSidesAnimation(),
  ]
})
export class PortalSearchComponent implements OnDestroy {
  
  public isSearching?: boolean;

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
  ) {
    this.store.select(selectIsSearching)
      .pipe(takeUntil(this.destroy))
      .subscribe(isSearching => this.isSearching = isSearching)
  }
  
  @HostListener('document:click')
  public outsideClick(): void {
    this.isSearching
      && this.store.dispatch(SearchActions.setSearchState(false));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
