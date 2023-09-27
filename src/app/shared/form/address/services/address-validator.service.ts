import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { VerifyAddressGQL } from 'src/app/account/api/generated/account-verify-address.mutation.generated';
import { AddressEntity } from 'src/app/core/api/generated/schema';

@Injectable()
export class AddressValidationService { 

  constructor(
    private verifyAddressService: VerifyAddressGQL,
  ) { }

  public verify(address: AddressEntity): Observable<AddressEntity> {
    return this.verifyAddressService.mutate({
      entity: address
    }).pipe(
      map(response => response.data?.verifyAddress as AddressEntity)
    );
  }

}