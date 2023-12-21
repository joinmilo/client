import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TableCellComponent } from '../../typings/cell';

@Component({
  selector: 'app-table-cell-boolean',
  template: `
    <app-icon [icon]="input 
      ? ['fas', 'check'] 
      : ['fas', 'xmark']">
    </app-icon>
  `,
})
export class TableCellBooleanComponent extends TableCellComponent<boolean> {

  constructor(
    store: Store,
  ) { super(store); }
}