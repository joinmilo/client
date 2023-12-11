import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SolidIcons } from 'src/assets/fontawesome/solid-icons';
import { TableCellComponent } from '../../typings/cell';

@Component({
  selector: 'app-table-cell-icon',
  template: `
    <span *ngIf="input">
      <i class="fas fa-{{input}}"></i>
    </span>
  `,
})
export class TableCellIconComponent extends TableCellComponent<SolidIcons> {

  constructor(
    store: Store,
  ) { super(store); }

}
