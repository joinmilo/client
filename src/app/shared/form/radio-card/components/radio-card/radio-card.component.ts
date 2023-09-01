import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { RadioCardInput } from '../../typings/radio-card-input';

@Component({
  selector: 'app-radio-card',
  templateUrl: './radio-card.component.html',
  styleUrls: ['./radio-card.component.scss']
})
export class RadioCardComponent<T> implements OnChanges {
  public checked = false;

  @Input()
  public input?: RadioCardInput;

  @Input()
  public value?: T;

  @Output()
  public valueChanged = new EventEmitter<T>();

  public ngOnChanges(): void {
    this.checked = this.input?.value === this.value;
  }

  public changeSelect(event: MouseEvent): void {
    event.stopPropagation();
    this.valueChanged.emit(this.input?.value as T);
  }

}