import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable, Subject, merge, startWith, takeUntil, tap } from 'rxjs';
import { Maybe } from 'src/schema/schema';
import { Column, PageableList, RowAction, SortPaginate } from '../../typings/table';

@Component({
  selector: 'app-table-mobile',
  templateUrl: './table-mobile.component.html',
  styleUrls: ['./table-mobile.component.scss'],
})
export class TableMobileComponent<T> implements AfterViewInit, OnDestroy{
  
  private _columns?: Column<T>[];

  public displayedColumns?: (Maybe<string> | undefined)[];

  @Input()
  public actions?: RowAction<T>[];

  @Input()
  public data?: Observable<PageableList<T> | undefined>;

  @Input()
  public set columns(columns: Column<T>[] | undefined) {
    this._columns = columns;
    this.displayedColumns = [...(columns?.map(c => c.field) || []), 'actions'];
  }

  public get columns(): Column<T>[] | undefined {
    return this._columns;
  }

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  @ViewChild(MatPaginator)
  public paginator!: MatPaginator;

  @ViewChild(MatSort)
  public sort!: MatSort;

  private destroy = new Subject<void>();

  public ngAfterViewInit(): void {

    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    
    merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      tap(() => this.emitSortPaginate()),
      takeUntil(this.destroy),
    ).subscribe();  
  }

  private emitSortPaginate(): void {
    this.sortPaginate.emit({
      dir: this.sort.direction,
      sort: this.sort.active,
      page: this.paginator.pageIndex,
      size: this.paginator.pageSize,
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete(); 
  }

}

  //   @Input()
  //   public data?: Observable<T[]>;

  //   @Input()
  //   public columns?: Column<T>[];

  //   @ViewChild(MatPaginator)
  //   public paginator!: MatPaginator;

  //   @ViewChild(MatSort)
  //   public sort!: MatSort;
