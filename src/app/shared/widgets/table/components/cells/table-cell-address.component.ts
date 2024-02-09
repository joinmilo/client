/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddressEntity } from 'src/app/core/api/generated/schema';
import { TableCellComponent } from '../../typings/cell';

@Component({
  selector: 'app-table-cell-address',
  template: `
    <cin-address-piece *ngIf="input"
      [address]="input">
    </cin-address-piece>
  `,
})
export class TableCellAddressComponent extends TableCellComponent<AddressEntity> {

  constructor(
    store: Store,
  ) { super(store); }
}
