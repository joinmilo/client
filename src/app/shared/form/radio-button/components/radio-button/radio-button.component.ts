import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RadioButtonInput } from '../../typings/radio-button-input';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent<T> implements OnChanges {
  public checked = false;

  @Input()
  public input?: RadioButtonInput;

  @Input()
  public value?: T;

  @Output()
  public valueChanged = new EventEmitter<T>();

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['value']) {
      this.checked = this.input?.value === this.value
    }
  }

  public changeSelect(event: MouseEvent): void {
    event.stopPropagation();
    this.valueChanged.emit(this.input?.value as T);
  }

}