import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AppValidators {

  public static same(...fields: string[]): ValidatorFn {
    return (group: AbstractControl) => {
      const values = fields
        .map((i) => group?.get(i)?.value);

      return values.every((i) => i === values[0])
        ? null
        : { notSame: true };
    };
  }

}