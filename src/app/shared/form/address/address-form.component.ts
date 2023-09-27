import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { AsyncValidator, ControlValueAccessor, FormBuilder, FormsModule, NG_ASYNC_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable, Subject, debounceTime, filter, map, of, switchMap, take, takeUntil, tap } from 'rxjs';
import { AddressEntity, Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { AppValidators } from 'src/app/core/validators/validators';
import { AddressValidationService } from './services/address-validator.service';

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
    AddressValidationService
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
    houseNumber: [''],
  }, {
    validators: [
      AppValidators.allOrNone('street', 'place', 'postalCode', 'houseNumber')
    ],
  });

  private onChange?: (value?: Maybe<AddressEntity>) => void;
  private onTouched?: () => void;
  private onValidatorChange?: () => void;

  private destroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private validationService: AddressValidationService) {

      this.form.statusChanges
        .pipe(takeUntil(this.destroy))
        .subscribe(() => this.onValidatorChange && this.onValidatorChange());

      this.form.valueChanges
        .pipe(
          tap(() => this.onTouched && this.onTouched()),
          filter(() => !this.form.errors),
          tap(() => console.log('test', this.form.errors)),
          debounceTime(1000),
          filter(value => this.allSet(value)),
          switchMap(value => this.validationService.verify(value)),
          takeUntil(this.destroy)
        )
        .subscribe((address: Maybe<AddressEntity>) => {
          this.allSet(address)
            ? this.onChange && this.onChange(address)
            : this.form.setErrors({ addressInvalid: true })
          this.onValidatorChange && this.onValidatorChange();
        });
  }

  public validate(): Observable<ValidationErrors | null> {
    return of(this.form.status)
      .pipe(
        map(status => status === 'VALID'
          ? null
          : { addressNotValid: true }),
        take(1)
      );
  }

  public registerOnChange(onChange: (value?: Maybe<AddressEntity>) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched?: () => void): void {
    this.onTouched = onTouched;
  }

  public registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  public writeValue(address: Maybe<AddressEntity>): void {
    this.form.patchValue({
      street: address?.street,
      place: address?.place,
      houseNumber: address?.houseNumber,
    });
  }

  private allSet(value: Maybe<AddressEntity>): boolean {
    return !!(value?.street
      && value?.houseNumber
      && value?.place);
  }
  
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}