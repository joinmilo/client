import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { CommonActions } from '../../state/common.actions';
import { selectFoundArticles, selectFoundAuthors, selectFoundContests, selectFoundDeals, selectFoundEvents, selectFoundOrganisations, selectFoundSurveys, selectSearchQuery } from './../../state/common.selectors';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class PortalSearchResultComponent implements OnInit, OnDestroy {

  public events = this.store.select(selectFoundEvents);
  public articles = this.store.select(selectFoundArticles);
  public organisations = this.store.select(selectFoundOrganisations);
  public authors = this.store.select(selectFoundAuthors);
  public deals = this.store.select(selectFoundDeals);
  public contests = this.store.select(selectFoundContests);
  public surveys = this.store.select(selectFoundSurveys);

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.select(selectSearchQuery).pipe(takeUntil(this.destroy)).subscribe((query => {
      this.store.dispatch(CommonActions.searchQuerySet(query));
    }))
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
