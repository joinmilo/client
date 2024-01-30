import { Component, OnDestroy } from '@angular/core';
import {
  AsyncValidator,
  ControlValueAccessor,
  FormBuilder,
  NG_ASYNC_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  Observable,
  Subject,
  debounceTime,
  filter,
  map,
  of,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { AddressEntity, Maybe } from 'src/app/core/api/generated/schema';
import { AppValidators } from 'src/app/core/validators/validators';
import { AddressValidationService } from '../services/address-validator.service';
import { AddressFormActions } from '../state/address-form.actions';
import { selectSuburbs } from '../state/address-form.selectors';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      multi: true,
      useExisting: AddressFormComponent,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AddressFormComponent,
    },
  ],
})
export class AddressFormComponent
  implements ControlValueAccessor, OnDestroy, AsyncValidator
{
  public form = this.fb.group(
    {
      id: [''],
      street: [''],
      place: [''],
      houseNumber: [''],
      suburb: [''],
    },
    {
      validators: [AppValidators.allOrNone('street', 'place', 'houseNumber')],
    }
  );

  private onChange?: (value?: Maybe<AddressEntity>) => void;
  private onTouched?: () => void;
  private onValidatorChange?: () => void;

  public suburbs = this.store.select(selectSuburbs);

  private destroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private validationService: AddressValidationService,
    private store: Store
  ) {
    this.store.dispatch(AddressFormActions.getSuburbs());

    this.form.statusChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(() => this.onValidatorChange && this.onValidatorChange());

    this.form.valueChanges
      .pipe(
        tap(() => this.onTouched?.()),
        tap((value) => !this.formFilled(value) && this.onChange?.(null)),
        filter((value) => this.formFilled(value)),
        tap(() => this.form.setErrors({ addressVerifying: true })),
        debounceTime(1000),
        switchMap((value) => this.validationService.verify(value)),
        tap(() => this.form.setErrors(null)),
        takeUntil(this.destroy)
      )
      .subscribe((address: Maybe<AddressEntity>) => {
        address
          ? this.onChange?.({
              ...address,
              id: this.form.value.id,
              suburb: { id: this.form.controls.suburb.value },
            })
          : this.form.setErrors({ addressInvalid: true });
        this.onValidatorChange && this.onValidatorChange();
      });
  }

  public validate(): Observable<ValidationErrors | null> {
    return of(this.form.status).pipe(
      map(
        (status) => (status === 'VALID' ? null : { addressInvalid: true }),
      ),
      take(1)
    );
  }

  public registerOnChange(
    onChange: (value?: Maybe<AddressEntity>) => void
  ): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched?: () => void): void {
    this.onTouched = onTouched;
  }

  public registerOnValidatorChange?(onValidatorChange: () => void): void {
    this.onValidatorChange = onValidatorChange;
  }

  public writeValue(address: Maybe<AddressEntity>): void {
    this.form.patchValue({
      id: address?.id,
      street: address?.street,
      place: address?.place,
      houseNumber: address?.houseNumber,
      suburb: address?.suburb?.id,
    });
  }

  private formFilled(
    value:
      | Partial<{
          street: Maybe<string>;
          place: Maybe<string>;
          houseNumber: Maybe<string>;
          suburb: Maybe<string>;
        }>
      | Maybe<AddressEntity>
  ): boolean {
    return !!(value?.street && value?.houseNumber && value?.place);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
