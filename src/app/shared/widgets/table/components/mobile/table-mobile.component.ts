import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Column, PageableList, RowAction, SortPaginate } from '../../typings/table';
import { TablePaginatorComponent } from '../paginator/table-paginator.component';

@Component({
  selector: 'app-table-mobile',
  templateUrl: './table-mobile.component.html',
  styleUrls: ['./table-mobile.component.scss'],
})
export class TableMobileComponent<T> implements AfterViewInit, OnDestroy {
  
  @Input()
  public actions?: RowAction<T>[];

  @Input()
  public columns?: Column<T>[];

  @Input()
  public data?: Observable<PageableList<T> | undefined>;

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  @ViewChild('container')
  private container?: ElementRef;

  private destroy = new Subject<void>();

  @ViewChild(TablePaginatorComponent)
  public paginator!: TablePaginatorComponent;

  public ngAfterViewInit(): void {
    this.paginator.page.pipe(
      tap(() => this.sortPaginate.emit({
        page: this.paginator.pageIndex,
        size: this.paginator.pageSize,
      })),
      tap(() => this.container?.nativeElement?.scrollIntoView()),
      takeUntil(this.destroy),
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}