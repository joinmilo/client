import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Subject, takeUntil } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';

@Component({
  selector: 'app-privacy-policy-form',
  templateUrl: './privacy-policy-form.component.html',
  styleUrls: ['./privacy-policy-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PrivacyPolicyFormComponent,
    }
  ],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,

    ReactiveFormsModule,

    MatSlideToggleModule,
  ]
})
export class PrivacyPolicyFormComponent implements ControlValueAccessor, OnDestroy {
  
  public control = new FormControl(false);

  private onChange?: (value?: boolean) => void;
  private onTouched?: () => void;

  private destroy = new Subject<void>();

  constructor() {
    this.control.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(value => {
        this.onChange && this.onChange(!!value);
        this.onTouched && this.onTouched();
      })
  }

  public writeValue(value: boolean): void {
    this.control.setValue(value);
  }

  public registerOnChange(onChange: (value?: boolean) => void): void {
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