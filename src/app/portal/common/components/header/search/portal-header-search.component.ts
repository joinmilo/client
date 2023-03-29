import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { CommonActions } from '../../../state/common.actions';
import { selectSearchQuery, selectSearchResult } from '../../../state/common.selectors';

@Component({
  selector: 'app-portal-header-search',
  templateUrl: './portal-header-search.component.html',
  styleUrls: ['./portal-header-search.component.scss']
})
export class PortalHeaderSearchComponent {

  searchControl = new FormControl();
  searchResult = this.store.select(selectSearchResult);
  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private router: Router) {
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.destroy)
      )
      .subscribe((query) => {
        query !== undefined && this.store.dispatch(CommonActions.searchQuerySet(query));
      });
  }

  showOneEntity(id: Maybe<string>) {
    this.router.navigate(['/portal/' + id]);
  }

  showAllEntities() {
    this.store.select(selectSearchQuery).pipe(takeUntil(this.destroy))
      .subscribe((query => {
        this.searchControl.setValue(query);
      }))
    this.router.navigate(['/portal/search'])
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}

}