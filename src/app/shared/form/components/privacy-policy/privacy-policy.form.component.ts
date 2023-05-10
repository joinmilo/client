import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-privacy-policy-form',
  templateUrl: './privacy-policy.form.component.html',
  styleUrls: ['./privacy-policy.form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => PrivacyPolicyFormComponent),
    }
  ],
})

export class PrivacyPolicyFormComponent {
  public value = false;

  private onChange: any = () => {};

  get termsAccepted(): boolean {
    return this.value;
  }

  set termsAccepted(value: boolean) {
    this.value = value;
    this.onChange(this.value);
  }

  onToggleChange(event: MatSlideToggleChange): void {
    this.termsAccepted = event.checked;
  }

  writeValue(value: boolean): void {
    this.termsAccepted = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {
    return;
  }
}