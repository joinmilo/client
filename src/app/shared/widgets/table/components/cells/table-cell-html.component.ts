import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TableCellComponent } from '../../typings/cell';

@Component({
  selector: 'app-table-cell-html',
  template: `
    <span [innerHTML]='input'></span>
  `,
})
export class TableCellHtmlComponent extends TableCellComponent<string> {

  constructor(
    store: Store,
  ) { super(store); }

}
