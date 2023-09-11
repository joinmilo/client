import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddressEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { AdminSettingsAddressActions } from '../state/admin-settings-address.actions';
import { selectAddresses } from '../state/admin-settings-address.selectors';

@Component({
  selector: 'app-admin-settings-address',
  templateUrl: './admin-settings-address.component.html',
  styleUrls: ['./admin-settings-address.component.scss'],
})
export class AdminSettingsAddressComponent {

  public addresses = this.store.select(selectAddresses);

  public actions: RowAction<AddressEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'edit'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: address =>
        this.store.dispatch(AdminSettingsAddressActions.deleteAddress(address)),
      tooltipLabel: 'delete'
    },

    'SHARE',
  ];

  public columns: Column<AddressEntity>[] = [
    {
      field: 'street',
      label: 'street',
    },
    {
      field: 'houseNumber',
      label: 'houseNumber'
    },
    {
      field: 'postalCode',
      label: 'postalCode',
    },
    {
      field: 'place',
      label: 'place',
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router, 
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsAddressActions.updateParams(params));
  }
}
