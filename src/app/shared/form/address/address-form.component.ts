import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, AsyncValidator, ControlValueAccessor, FormBuilder, FormsModule, NG_ASYNC_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';
import { AddressEntity, Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { AppValidators } from 'src/app/core/validators/validators';
import { AddressVerify } from './services/address-verify.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  standalone: true,
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      multi: true,
      useExisting: AddressFormComponent
    },
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AddressFormComponent,
    },
    AddressVerify
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CoreModule,
    CommonModule
  ]
})
export class AddressFormComponent implements ControlValueAccessor, OnDestroy, AsyncValidator {

  public form = this.fb.group({
    street: ['', ],
    place: [''],
    postalCode: ['', [this.postalCodeValidator]],
    houseNumber: [''],
  }, {
    validators: [AppValidators.allOrNoFieldsRequired(
      'street', 'place', 'postalCode', 'houseNumber')],
    asyncValidators: [this.addressVerify.validate.bind(this.addressVerify)],
  });

  private onChange?: (value?: Maybe<AddressEntity>) => void;
  private onTouched?: () => void;
  private onValidatorChange?: () => void;

  private destroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private addressVerify: AddressVerify) {
      this.form.valueChanges.pipe(takeUntil(this.destroy))
        .subscribe((address: AddressEntity) => {
          this.onChange && this.onChange(address);
          this.onTouched && this.onTouched();
        });
  }

  public validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    console.log('validat', control)
    return this.form.statusChanges
      .pipe(
        tap(state => console.log('state', state)),
        map(status => status === 'INVALID'
          ? { addressNotValid: true }
          : null),
        tap(result => console.log(result)),
      );
  }

  public registerOnChange(onChange: (value?: Maybe<AddressEntity>) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched?: () => void): void {
    this.onTouched = onTouched;
  }

  // public registerOnValidatorChange?(fn: () => void): void {
  //   this.onValidatorChange = fn;
  // }

  public writeValue(address: AddressEntity): void {
    address
      ? this.form.patchValue({
          street: address.street,
          place: address.place,
          postalCode: address.postalCode,
          houseNumber: address.houseNumber,
        })
      : this.form.patchValue({
          street: undefined,
          place: undefined,
          postalCode: undefined,
          houseNumber: undefined,
        });
  }
  private postalCodeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const postalCode = control.value as string;

      if (postalCode && postalCode.length !== 5) {
        return { postalCodeLength: true };
      }
      return null;
    };
  }
  
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}