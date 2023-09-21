/* eslint-disable @typescript-eslint/no-explicit-any */
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSort, SortDirection } from '@angular/material/sort';
import { Observable, Subject, merge, takeUntil, tap } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { ContentEntity } from 'src/app/core/typings/content-entity';
import { Column, PageableList, RowAction, RowCustomAction, SortPaginate } from '../../typings/table';
import { TablePaginatorComponent } from '../paginator/table-paginator.component';

@Component({
  selector: 'app-table-desktop',
  templateUrl: './table-desktop.component.html',
  styleUrls: ['./table-desktop.component.scss']
})
export class TableDesktopComponent<T> implements AfterViewInit, OnDestroy {

  @Input()
  public set actions(actions: RowAction<T>[] | undefined) {
    this._actions = actions?.filter(action => {
      const isInlineEdit = typeof action !== 'string'
        && Object.hasOwn(action, 'inlineEdit')
        && !!(action as RowCustomAction<T>).inlineEdit
  
      if (isInlineEdit) {
        this.inlineEditAction = action as RowCustomAction<T>;
      }
  
      return !isInlineEdit;
    });
  }

  public get actions(): RowAction<T>[] | undefined {
    return this._actions;
  }

  @Input()
  public clickable?: boolean;

  @Input()
  public data?: Observable<PageableList<T> | undefined>;

  @Input()
  public set columns(columns: Column<T>[] | undefined) {
    this._columns = columns;
    this.initDisplayColumns(columns);
    this.initForm(columns);
  }

  public get columns(): Column<T>[] | undefined {
    return this._columns;
  }

  @Input()
  public entity?: ContentEntity;
  
  @Input()
  public initParams?: SortPaginate;

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  @Output()
  public rowClicked = new EventEmitter<Maybe<T>>();

  @ViewChild(TablePaginatorComponent)
  public paginator!: TablePaginatorComponent;

  @ViewChild(MatSort)
  public sort!: MatSort;

  private _actions?: RowAction<T>[];

  private _columns?: Column<T>[];

  public displayedColumns?: (Maybe<string> | undefined)[];

  public form = this.fb.group({});

  public inlineEditAction?: RowCustomAction<T>;
  public editRow?: any;
  public inlineEditMode = false;

  public maxInline = 4;

  private destroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
  ) { }

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

  private initDisplayColumns(columns: Column<T>[] | undefined): void {
    this.displayedColumns = [
      ...columns?.map(c => c.field) || [],
      ...(this.actions
        ? ['actions']
        : [])
    ];
  }

  private initForm(columns: Column<T>[] | undefined): void {
    columns?.forEach(column => {
      if (column.editable) {
        this.form.addControl(
          column.field,
          new FormControl('', Validators.required)
        );
      }
    });
  }

  public save(row: any): void {    
    for (const control in this.form.controls) {
      row = { ...row,
        [control]: this.form.get(control)?.value };
    }

    this.inlineEditAction?.callback?.(row);
    this.disableInlineEdit();
  }

  public disableInlineEdit(): void {
    this.inlineEditMode = false;
    this.editRow = undefined;
    this.columns?.forEach(column => {
      if (column.editable) {
        this.form.patchValue({
          [column.field]: ''
        });
      }
    })
  }

  public enableInlineEdit(row: any): void {
    this.inlineEditMode = true;
    this.editRow = row;
    this.columns?.forEach(column => {
      if (column.editable) {
        this.form.patchValue({
          [column.field]: row[column.field]
        });
      }
    })
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete(); 
  }

}