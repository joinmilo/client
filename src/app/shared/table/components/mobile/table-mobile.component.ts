import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Maybe } from 'src/schema/schema';
import { Column, PageableList, RowAction, SortPaginate } from '../../typings/table';

@Component({
  selector: 'app-table-mobile',
  templateUrl: './table-mobile.component.html',
  styleUrls: ['./table-mobile.component.scss'],
})
export class TableMobileComponent<T> implements OnInit, OnDestroy {
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
      ...(columns?.map((c) => c.field) || []),
      'actions',
    ];
  }

  public get columns(): Column<T>[] | undefined {
    return this._columns;
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  @ViewChild(MatPaginator)
  public paginator!: MatPaginator;
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
}