import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, distinctUntilChanged, takeUntil } from 'rxjs';
import { SearchDto } from 'src/schema/schema';
import { CommonActions } from '../../../state/common.actions';
import { selectSearchQuery, selectSearchResult } from '../../../state/common.selectors';

@Component({
  selector: 'app-portal-header-search',
  templateUrl: './portal-header-search.component.html',
  styleUrls: ['./portal-header-search.component.scss']
})
export class PortalHeaderSearchComponent implements OnInit, OnDestroy{

  public control = new FormControl('' as Maybe<string> | undefined);
  
  public result = this.store.select(selectSearchResult);

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private router: Router) {
  }

  public ngOnInit(): void {
    this.store.select(selectSearchQuery)
      .pipe(takeUntil(this.destroy))
      .subscribe((query => {
        this.control.setValue(query);
      }))

    this.control.valueChanges
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.destroy)
      ).subscribe((query) => {
        query !== undefined && this.store.dispatch(CommonActions.searchQuerySet(query));
      });
  }

  public navigateDetails(entity: Maybe<SearchDto>) {
    this.store.dispatch(CommonActions.navigateDetails(entity?.id, entity?.feature))
  }

  public navigateSearchPage() {
    this.store.select(selectSearchQuery)
      .pipe(takeUntil(this.destroy))
      .subscribe((query => {
        this.control.setValue(query);
      }))
    this.router.navigate(['/portal', 'search'])
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
