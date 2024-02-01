import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SolidIconsType } from 'ngx-cinlib/icons';
import { TableCellComponent } from '../../typings/cell';

@Component({
  selector: 'app-table-cell-icon',
  template: `
    <cin-icon *ngIf="input" [icon]="['fas', input]"></cin-icon>
  `,
})
export class TableCellIconComponent extends TableCellComponent<SolidIconsType> {

  constructor(
    store: Store,
  ) { super(store); }

}
