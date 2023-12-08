import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TableCellComponent } from '../../typings/cell';

@Component({
  selector: 'app-table-cell-boolean',
  template: `
    <span *ngIf="input">
      <i class="fas fa-check"></i>
    </span>
    <span *ngIf="!input">
      <i class="fas fa-xmark"></i>
    </span>
  `,
})
export class TableCellBooleanComponent extends TableCellComponent<boolean> {

  constructor(
    store: Store,
  ) { super(store); }
}