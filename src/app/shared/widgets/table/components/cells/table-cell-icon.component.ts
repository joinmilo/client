import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';
import { TableCellComponent } from '../../typings/cell';

@Component({
  selector: 'app-table-cell-icon',
  template: `
    <span *ngIf="input">
      <i class="fas fa-{{input}}"></i>
    </span>
  `,
})
export class TableCellIconComponent extends TableCellComponent<IconProp> {

  constructor(
    store: Store,
  ) { super(store); }

}
