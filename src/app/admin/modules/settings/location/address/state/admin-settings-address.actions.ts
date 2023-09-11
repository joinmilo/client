import { createActionGroup, emptyProps } from '@ngrx/store';
import { AddressEntity, FilterSortPaginateInput, Maybe, PageableList_AddressEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsAddressActions = createActionGroup({
  source: 'Address Admin Overview',
  events: {

    'set overview data': (addresss: PageableList_AddressEntity) => ({ addresss }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete address': (address?: Maybe<AddressEntity>) => ({ address }),
    'address deleted': emptyProps(),
  }
});
