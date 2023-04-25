import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Column, RowAction, SortPaginate } from '../typings/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> {

  @Input()
  public data?: Observable<T[] | undefined>;

  @Input()
  public columns?: Column<T>[];

  @Input()
  public actions?: RowAction<T>[];

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public emitSortPaginate(sortPage: SortPaginate): void {
    this.sortPaginate.emit(sortPage);
  }

}