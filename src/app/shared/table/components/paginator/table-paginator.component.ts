import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Maybe } from 'src/schema/schema';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss']
})
export class TablePaginatorComponent {

  @ViewChild(MatPaginator)
  public paginator!: MatPaginator;

  public _length?: Maybe<number>;

  @Input()
  public set length(length: Maybe<number> | undefined) {
    this._length = length;
  }

  public get length(): Maybe<number> {
    return this.paginator.length;
  }

  public _pageIndex?: Maybe<number>;

  @Input()
  public set pageIndex(pageIndex: Maybe<number> | undefined) {
    this._pageIndex = pageIndex;
  }

  public get pageIndex(): Maybe<number> {
    return this.paginator.pageIndex;
  }

  public _pageSize?: Maybe<number>;

  @Input()
  public set pageSize(pageSize: Maybe<number> | undefined) {
    this._pageSize = pageSize;
  }

  public get pageSize(): Maybe<number> {
    return this.paginator.pageSize;
  }

  @Output()
  public page = new EventEmitter<PageEvent>;

  public updatePage(event: PageEvent): void {
    this.page.emit(event);
  }

}