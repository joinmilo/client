import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { Observable, Subject, merge, takeUntil, tap } from 'rxjs';
import { Maybe } from 'src/schema/schema';
import { Column, PageableList, RowAction, SortPaginate } from '../../typings/table';

@Component({
  selector: 'app-table-desktop',
  templateUrl: './table-desktop.component.html',
  styleUrls: ['./table-desktop.component.scss']
})
export class TableDesktopComponent<T> implements AfterViewInit, OnDestroy {

  private _columns?: Column<T>[];

  public displayedColumns?: (Maybe<string> | undefined)[];

  @Input()
  public actions?: RowAction<T>[];

  @Input()
  public data?: Observable<PageableList<T> | undefined>;

  @Input()
  public set columns(columns: Column<T>[] | undefined) {
    this._columns = columns;
    this.displayedColumns = [
      ...columns?.map(c => c.field) || [],
      'actions'
    ];
  }

  public get columns(): Column<T>[] | undefined {
    return this._columns;
  }
  
  @Input()
  public initParams?: SortPaginate;

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  @ViewChild(MatPaginator)
  public paginator!: MatPaginator;

  @ViewChild(MatSort)
  public sort!: MatSort;

  private destroy = new Subject<void>();

  public ngAfterViewInit(): void {

    this.sort.sort({
      id: this.initParams?.sort ?? '',
      start: this.initParams?.dir as SortDirection ?? '',
      disableClear: true
    });

    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    
    merge(this.sort.sortChange, this.paginator.page).pipe(
      tap(() => this.sortPaginate.emit({
        dir: this.sort.direction,
        sort: this.sort.active,
        page: this.paginator.pageIndex,
        size: this.paginator.pageSize,
      })),
      takeUntil(this.destroy),
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete(); 
  }

}