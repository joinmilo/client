import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { TableActions } from '../state/table.actions';
import { Column, PageableList, RowAction, SortPaginate } from '../typings/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnInit, OnDestroy {

  @Input()
  public actions?: RowAction<T>[];

  @Input()
  public columns?: Column<T>[];

  @Input()
  public data?: Observable<PageableList<T> | undefined>;

  @Input()
  public initParams?: SortPaginate;

  @Input()
  public queryParams = true;

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {}

  public ngOnInit(): void {
    this.queryParams && this.activatedRoute.queryParams
      .pipe(take(1))
      .subscribe((params: SortPaginate) => {
        this.initParams = {
          dir: params.dir,
          page: params.page ?? 0,
          size: params.size ?? 10,
          sort: params.sort
        };
        this.store.dispatch(TableActions.setSortPagination(this.initParams));
      });
  }

  public emitSortPaginate(sortPage: SortPaginate): void {
    this.sortPaginate.emit(sortPage);

    this.store.dispatch(TableActions.setSortPagination(sortPage));

    if (this.queryParams) {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: sortPage,
        queryParamsHandling: 'merge',
      });
    }
  }

  public ngOnDestroy(): void {
    this.store.dispatch(TableActions.setSortPagination(undefined));
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        dir: null,
        page: null,
        size: null,
        sort: null,
      },
      queryParamsHandling: 'merge'
    });
  }
}