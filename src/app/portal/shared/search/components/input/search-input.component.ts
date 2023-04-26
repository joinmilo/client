import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, combineLatest, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { growOnSidesAnimation } from 'src/app/core/animations/animations';
import { PortalMenuActions } from 'src/app/portal/shared/menu/state/portal-menu.actions';
import { Maybe, SearchDto } from 'src/schema/schema';
import { SearchActions } from '../../state/search.actions';
import { selectSearchQuery, selectSearchResult } from '../../state/search.selectors';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  animations: [
    growOnSidesAnimation,
  ]
})
export class SearchInputComponent implements AfterViewInit, OnDestroy {

  public control = new FormControl('' as Maybe<string> | undefined);
  
  public result = this.store.select(selectSearchResult);

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
  ) { }

  public ngAfterViewInit(): void {
    combineLatest([
      this.store.select(selectSearchQuery),
      this.control.valueChanges,
    ]).pipe(
      distinctUntilChanged(),
      debounceTime(400),
      takeUntil(this.destroy)
    ).subscribe(([stateQuery, controlQuery]) => {
      stateQuery && controlQuery === undefined
        ? this.control.patchValue(stateQuery)
        : this.store.dispatch(SearchActions.searchQuerySet(controlQuery));
    });
  }

  public close(): void {
    this.store.dispatch(SearchActions.setSearchState(false));
  }

  public navigateDetails(event: MouseEvent,  entity: Maybe<SearchDto>): void {
    event.stopPropagation();
    this.store.dispatch(PortalMenuActions.navigateDetails(entity?.id, entity?.feature));
  }

  public navigateResultPage(event: MouseEvent): void {
    event.stopPropagation();
    this.store.dispatch(SearchActions.navigateResultPage());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
