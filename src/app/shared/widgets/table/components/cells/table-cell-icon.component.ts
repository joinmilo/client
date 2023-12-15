import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SolidIconsType } from 'src/app/shared/widgets/icon/typings/solid-icons';
import { TableCellComponent } from '../../typings/cell';

@Component({
  selector: 'app-table-cell-icon',
  template: `
    <app-icon *ngIf="input" [icon]="['fas', input]"></app-icon>
  `,
})
export class TableCellIconComponent extends TableCellComponent<SolidIconsType> {

  constructor(
    store: Store,
  ) { super(store); }

}
