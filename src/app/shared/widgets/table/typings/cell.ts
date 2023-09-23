/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, isObservable, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { fieldValue } from 'src/app/core/utils/reflection.utils';
import { TableActions } from '../state/table.actions';
import { selectInlineEditActive, selectInlineEditRow } from '../state/table.selectors';
import { Column } from './table';

@Directive() 
export abstract class TableCellComponent<T> implements OnInit, OnChanges, OnDestroy {

  @Input()
  public column?: Maybe<Column<any>>;

  @Input()
  public row?: any;

  @Input()
  public transformation?: (input?: any) => T;

  public control!: FormControl;

  public get editMode(): boolean {
    return !!(this.inlineEditModeActive
      && this.column?.editable
      && this.row?.id === this.inlineEditRow?.id
      && this.control);
  }

  public input?: T;

  public inlineEditModeActive?: boolean;
  public inlineEditRow?: any;

  protected destroy = new Subject<void>();

  constructor(
    protected store: Store,
  ) {
    this.store.select(selectInlineEditActive)
      .pipe(takeUntil(this.destroy))
      .subscribe(inlineEditModeActive =>
        this.inlineEditModeActive = inlineEditModeActive);
    
    this.store.select(selectInlineEditRow)
      .pipe(takeUntil(this.destroy))
      .subscribe(inlineEditRow =>
        this.inlineEditRow = inlineEditRow);
  }

  public ngOnInit(): void {
    this.createInput();
  }

  public ngOnChanges(): void {
    this.createInput();
  }

  protected createInput(): void {
    if (this.row && this.column) {
      this.column?.value
        ? this.function(this.column?.value(this.row))
        : this.inputValue(fieldValue(this.row, this.column?.field)); 
    }
  }

  protected function(result: Observable<Maybe<string>> | Maybe<string>): void {
    isObservable(result)
      ? result.pipe(takeUntil(this.destroy))
          .subscribe(value => this.inputValue(value))
      : this.inputValue(result);
  }

  protected inputValue(value: any) {
    this.input = this.transformation
      ? this.transformation(value)
      : value;

    if (!this.control) {
      this.control = new FormControl(value);
      this.control.valueChanges
        .pipe(takeUntil(this.destroy))
        .subscribe(value => {
          if (this.column && this.row) {
            this.store.dispatch(TableActions.editRow(
              this.column?.field,
              value
            ));
          }
        });
    }
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}