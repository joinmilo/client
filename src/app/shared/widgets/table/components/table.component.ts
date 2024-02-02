import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, isObservable, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { ContentEntity } from 'src/app/core/typings/content-entity';
import { PageableList } from 'src/app/core/typings/pageable';
import { TableActions } from '../state/table.actions';
import { selectClickedRow, selectParams } from '../state/table.selectors';
import { Column, RowAction, SortPaginate } from '../typings/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnInit, OnDestroy {

  @Input()
  public set actions(actions: RowAction<T>[]) {
    this.store.dispatch(TableActions.setActions(actions));
  }

  @Input()
  public set columns(columns: Column<T>[]) {
    this.store.dispatch(TableActions.setColumns(columns));
  }

  @Input()
  public set data(data: Observable<Maybe<PageableList<T>>> | Maybe<PageableList<T>>) {
    isObservable(data)
      ? data
        .pipe(takeUntil(this.destroy))
        .subscribe(data => this.store.dispatch(TableActions.setData(data)))
      : this.store.dispatch(TableActions.setData(data));
  }

  //TODO: Remove because only necessary for Favorites / Share actions
  // but not all tables have that
  @Input()
  public set entity(entity: ContentEntity) {
    this.store.dispatch(TableActions.setEntity(entity));
  }

  @Input()
  public set initParams(initParams: SortPaginate) {
    this.store.dispatch(TableActions.setParams(initParams));
  }

  @Input()
  public set queryParams(queryParams: boolean) {
    this.store.dispatch(TableActions.setQueryParams(queryParams));
  }

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  @Output()
  public rowClicked = new EventEmitter<Maybe<T>>();

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(TableActions.init());

    this.store.select(selectParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.sortPaginate.emit(params));

    this.store.select(selectClickedRow)
      .pipe(takeUntil(this.destroy))
      .subscribe(row => row && this.rowClicked.emit(row));

    this.store.dispatch(TableActions.setClickable(this.rowClicked.observed));
  }

  public ngOnDestroy(): void {
    //TODO: This has side effects when switchin from mobile to desktop and vice versa
    // If not called, sort props mix up for different tables
    this.store.dispatch(TableActions.resetTable());

    this.destroy.next();
    this.destroy.complete();
  }
} 