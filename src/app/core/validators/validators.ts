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

  public static digitNumbers(): ValidatorFn {
    return (control: AbstractControl) => {
      const pattern = /^-?[0-9]\d*([.,]\d+)?$/;

      if (control.value === null || control.value === '') {
        return null;
      }

      if (!pattern.test(control.value)) {
        return { numbersOnly: true };
      }

      return null;
    };
  }

  public static allOrNoFieldsRequired(...fields: string[]): ValidatorFn {
    return (group: AbstractControl) => {
      const values = fields.map((fieldName) => group?.get(fieldName)?.value);
  
      const areAllFieldsNullOrEmpty = values.every((value) => value == null || value === '');
  
      const allFieldsWithValue = values.every((value) => value != null && value !== '');
  
      if (areAllFieldsNullOrEmpty || allFieldsWithValue) {
        return null; 
      }
      return { allFieldsRequired: true };
    };
  }

}