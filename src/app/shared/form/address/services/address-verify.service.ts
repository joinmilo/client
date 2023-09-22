import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, debounceTime, map, of, switchMap, take } from 'rxjs';
import { VerifyAddressGQL } from 'src/app/account/api/generated/account-verify-address.mutation.generated';

@Injectable()
export class AddressVerify{ 

  constructor(
    private validateAddressService: VerifyAddressGQL,
  ) { }

  public validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return control.valueChanges.pipe(
      debounceTime(2000),
      switchMap(() => {
        const street = control.get('street')?.value;
        const place = control.get('place')?.value;
        const postalCode = control.get('postalCode')?.value;
        const houseNumber = control.get('houseNumber')?.value;
        if (street && place && postalCode && houseNumber) {
          return this.validateAddressService.mutate({
            entity: {
              street: street,
              place: place,
              postalCode: postalCode,
              houseNumber: houseNumber
            }
          }).pipe(
            map(address => {

              return address.data?.verifyAddress?.longitude ? null : { addressInvalid: true };
              
            }),
            // catchError(() => of({ addressInvalid: true }))
          );
        } else {
          return of(null);
        }
      })
    ).pipe(take(1)); 
  }

}