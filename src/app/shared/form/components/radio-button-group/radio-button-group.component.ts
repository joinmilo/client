import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, take } from 'rxjs';
import { RadioInput } from '../../typings/radio-input';

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
export class RadioButtonGroupComponent<T> implements ControlValueAccessor, OnInit {

  @Input()
  public initValue?: T;
  
  @Input()
  public inputs?: RadioInput[];

  @Input()
  public queryParamKey?: string;

  @Output()
  public valueChanged = new EventEmitter<T>();

  private onChange?: (value: T) => void;

  private currentValue = new Subject<T>();

  public value = this.currentValue.asObservable();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    if (this.queryParamKey) {
      this.activatedRoute.queryParams
        .pipe(take(1))
        .subscribe(params => {
          if (this.queryParamKey) {
            this.initValue = params[this.queryParamKey] ?? this.initValue;
            this.valueChanged.emit(this.initValue);
          }
        })
    }
  }

  public writeValue(value: T): void {
    this.next(value);
  }

  public next(value: T) {
    this.currentValue.next(value);
    this.valueChanged.emit(value);
    this.onChange && this.onChange(value);

    if (this.queryParamKey) {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {
          [this.queryParamKey]: value
        },
        queryParamsHandling: 'merge',
      });
    }
  }

  public registerOnChange(onChange: (value: T) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(): void {
    return;
  }

}