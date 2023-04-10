import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { RadioInput } from 'src/app/core/typings/radio-input';

@Component({
  selector: 'app-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RadioButtonGroupComponent
    },
  ]
})
export class RadioButtonGroupComponent<T> implements OnInit, ControlValueAccessor {

  @Input()
  public initValue?: T;
  
  @Input()
  public inputs?: RadioInput[];

  @Output()
  public valueChanged = new EventEmitter<T>();

  private onChange?: (value: T) => void;

  private currentValue = new Subject<T>();

  public value = this.currentValue.asObservable();

  public ngOnInit(): void {
    this.initValue && this.currentValue.next(this.initValue);
  }

  public writeValue(value: T): void {
    this.next(value);
  }

  public next($event: T) {
    this.currentValue.next($event);
    this.valueChanged.emit($event);
    this.onChange && this.onChange($event);
  }

  public registerOnChange(onChange: (value: T) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(): void {
    return;
  }

}