import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Maybe } from 'src/schema/schema';
import { PageableList, Row, RowAction } from '../../typings/table';

@Component({
  selector: 'app-table-mobile',
  templateUrl: './table-mobile.component.html',
  styleUrls: ['./table-mobile.component.scss'],
})
export class TableMobileComponent<T>{
  
  private _rows?: Row<T>[];

  public displayedColumns?: (Maybe<string> | undefined)[];

  @Input()
  public actions?: RowAction<T>[];

  @Input()
  public data?: Observable<PageableList<T> | undefined>;

  @Input()
  public set rows(rows: Row<T>[] | undefined) {
    this._rows = rows;
    this.displayedColumns = [...(rows?.map(c => c.field) || []), 'actions'];
  }

  public get rows(): Row<T>[] | undefined {
    return this._rows;
  }

  // @Output()
  // public sortPaginate = new EventEmitter<SortPaginate>();

  // @ViewChild(MatPaginator)
  // public paginator!: MatPaginator;

  // @ViewChild(MatSort)
  // public sort!: MatSort;

  // private destroy = new Subject<void>();

  // public ngAfterViewInit(): void {

  //   this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    
  //   merge(this.sort.sortChange, this.paginator.page).pipe(
  //     startWith({}),
  //     tap(() => this.emitSortPaginate()),
  //     takeUntil(this.destroy),
  //   ).subscribe();  
  // }

  // private emitSortPaginate(): void {
  //   this.sortPaginate.emit({
  //     dir: this.sort.direction,
  //     sort: this.sort.active,
  //     page: this.paginator.pageIndex,
  //     size: this.paginator.pageSize,
  //   });
  // }

  // public ngOnDestroy(): void {
  //   this.destroy.next();
  //   this.destroy.complete(); 
  // }

}

  //   @Input()
  //   public data?: Observable<T[]>;

  //   @Input()
  //   public columns?: Column<T>[];

  //   @ViewChild(MatPaginator)
  //   public paginator!: MatPaginator;

  //   @ViewChild(MatSort)
  //   public sort!: MatSort;
