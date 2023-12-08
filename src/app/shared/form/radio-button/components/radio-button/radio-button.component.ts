import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButtonInput } from '../../typings/radio-button-input';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RadioButtonComponent
    },
  ]
})
export class RadioButtonComponent<T> implements ControlValueAccessor, OnChanges {
  public checked = false;

  @Input()
  public input?: RadioButtonInput;

  @Input()
  public value?: T;

  @Output()
  public valueChanged = new EventEmitter<T>();

  public disabled = false;

  private onChange?: (value?: T) => void;
  private onTouched?: () => void;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['value']) {
      this.checked = this.input?.value === this.value
    }
  }

  public changeSelect(event: MouseEvent): void {
    event.stopPropagation();
    this.valueChanged.emit(this.input?.value as T);
    this.onChange?.(this.input?.value as T);
    this.onTouched?.();
  }

  public writeValue(value: T): void {
    this.value = value;
  }

  public registerOnChange(onChange: (value?: T) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  
}