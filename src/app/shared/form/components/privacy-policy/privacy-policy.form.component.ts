import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-privacy-policy-form',
  templateUrl: './privacy-policy.form.component.html',
  styleUrls: ['./privacy-policy.form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting:  forwardRef(() => PrivacyPolicyFormComponent),
    }
  ],
})
export class PrivacyPolicyFormComponent {
  public value = false;

  get termsAccepted(): boolean {
    return this.value;
  }

  set termsAccepted(value: boolean) {
    this.value = value;
    this.onChange(this.value); 
  }

  onToggleChange(event: any): void {
    this.termsAccepted = event.checked;
  }

  writeValue(value: boolean): void {
    this.termsAccepted = value;
  }

  private onChange: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {
    return;
  }
}