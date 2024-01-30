/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TableCellComponent } from '../../typings/cell';

@Component({
  selector: 'app-table-cell-date',
  template: `
    <app-date-piece *ngIf="input"
      [date]="input">
    </app-date-piece>
  `,
})
export class TableCellDateComponent extends TableCellComponent<string> {

  constructor(
    store: Store,
  ) { super(store); }
}
