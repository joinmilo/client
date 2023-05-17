import { Component, Input, OnDestroy, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Maybe } from 'src/schema/schema';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
})
export class PasswordFormComponent implements ControlValueAccessor, OnInit, OnDestroy {
  
    public control = new FormControl('');

  private onChange?: (value?: Maybe<string>) => void;
  private onTouched?: () => void;

  @Input()
  public label = 'password';

  public hide = true;
  public required = false;
  private destroy = new Subject<void>();

  constructor(
    @Optional() @Self()
    public ngControl: NgControl) {

    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    } 

    this.control?.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(value => this.mark(value));
  }

  public ngOnInit(): void {
    if (this.ngControl) {
      this.required = this.ngControl?.control?.hasValidator(Validators.required) ?? false;
    }
  }

  public writeValue(value: Maybe<string>): void {
    this.control.setValue(value);
    this.mark(value);
  }

  public mark(value: Maybe<string>) {
    this.onChange && this.onChange(value);
    this.onTouched && this.onTouched();
  }
  
  public registerOnChange(onChange: (value?: Maybe<string>) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched?: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState?(isDisabled: boolean): void {
    isDisabled
      ? this.control?.disable()
      : this.control?.enable();
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
  
}