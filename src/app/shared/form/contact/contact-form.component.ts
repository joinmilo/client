import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ContactEntity, Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { GridLayoutModule } from '../../layout/grid-layout/grid-layout.module';
import { FormStepperModule } from '../stepper/form-stepper.module';
import { ContactOptionEntity } from './typings/contact-form';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ContactFormComponent,
    },
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormStepperModule,
    GridLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
})
export class ContactFormComponent
  implements ControlValueAccessor, OnInit, OnDestroy, OnChanges
{
  @Input()
  public inputOptions?: Maybe<Maybe<ContactOptionEntity>[]>;

  public form = this.fb.group({
    contactOptionLabel: [undefined as Maybe<string>],
    name: ['' as Maybe<string>],
    email: ['' as Maybe<string>],
    phone: ['' as Maybe<string>],
    website: ['' as Maybe<string>],
  });

  public contactOptions?: Maybe<Maybe<ContactOptionEntity>[]>;

  private baseOption = {
    label: 'createNewContact',
    contact: {
      name: '',
      email: '',
      phone: '',
      website: '',
    },
  };

  private userOption?: Maybe<ContactOptionEntity> | null;

  private onChange?: (value?: Maybe<ContactEntity>) => void;

  private onTouched?: () => void;

  private destroy = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store) {
    this.form.controls.contactOptionLabel.valueChanges.pipe(takeUntil(this.destroy)).subscribe(
      (selectedOption) => {
        this.updateFormControls(selectedOption);
      }
    );

    this.form.valueChanges.pipe(takeUntil(this.destroy)).subscribe(() => {
      this.onTouched?.();
      this.onChange?.({
        name: this.form.value.name,
        email: this.form.value.email,
        phone: this.form.value.phone,
        website: this.form.value.website,
      });
    });
  }

  ngOnInit(): void {
    this.store
      .select(selectCurrentUser)
      .pipe(takeUntil(this.destroy),
       takeUntil(this.destroy))
      .subscribe((userContext) => {
        if (userContext) {
          this.userOption = {
            label: 'createContactWithOwnData',
            contact: {
              name: `${userContext?.user?.firstName} ${userContext?.user?.lastName}`,
              email: userContext?.user?.email,
              phone: userContext?.user?.phone,
            },
          };
        }
        this.updateOptions();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateOptions();
  }

  updateOptions(): void {
    this.contactOptions = [
      ...(this.inputOptions ?? []),
      this.baseOption,
      this.userOption,
    ];
    if (
      this.form.value.contactOptionLabel !== 'createNewContact' &&
      this.form.value.contactOptionLabel !== 'createContactWithOwnData' &&
      this.form.value.contactOptionLabel !== null
     ) {
      this.inputOptions?.map((option) => {
        this.updateFormControls(option?.label);
      });
    }
  }

  private updateFormControls(selectedOptionLabel: Maybe<string>) {
    const selectedOption = this.contactOptions?.filter(
      (option) => option?.label === selectedOptionLabel
    )?.[0];
    if (selectedOptionLabel) {
      this.form.patchValue({
        name: selectedOption?.contact?.name,
        email: selectedOption?.contact?.email,
        phone: selectedOption?.contact?.phone,
        website: selectedOption?.contact?.website,
      });
    }
  }

  writeValue(contact: Maybe<ContactEntity>): void {
    this.form.patchValue({
      name: contact?.name,
      email: contact?.email,
      phone: contact?.phone,
      website: contact?.website,
    });
  }

  public registerOnChange(
    onChange: (value?: Maybe<ContactEntity>) => void
  ): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched?: () => void): void {
    this.onTouched = onTouched;
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
