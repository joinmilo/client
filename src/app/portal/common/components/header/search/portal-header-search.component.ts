import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { CommonActions } from '../../../state/common.actions';
import { selectSearchResult } from '../../../state/common.selectors';

@Component({
  selector: 'app-portal-header-search',
  templateUrl: './portal-header-search.component.html',
  styleUrls: ['./portal-header-search.component.scss']
})
export class PortalHeaderSearchComponent {

  searchControl = new FormControl('');

  searchResult = this.store.select(selectSearchResult);

  @Output() searchClicked = new EventEmitter<string>();

  constructor(
    private store: Store,) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((query) => {
        this.store.dispatch(CommonActions.getSearchResult(query));
      });
  }

}