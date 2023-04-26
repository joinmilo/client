import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RadioInput } from '../../typings/radio-input';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent<T> implements OnInit {

  public checked = false;

  @Input()
  public input?: RadioInput;

  @Input()
  public value?: Observable<T>;

  @Input()
  public initValue?: T;

  @Input()
  public queryParamKey?: string;

  @Output()
  public valueChanged = new EventEmitter<T>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.initValue && (this.checked = this.input?.value === this.initValue);
    this.value?.subscribe(value =>
      this.checked = this.input?.value === value);
  }

  public changeSelect(event: MouseEvent): void {
    event.stopPropagation();
    this.valueChanged.emit(this.input?.value as T);

    if (this.queryParamKey) {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {
          [this.queryParamKey || '']: this.input?.value
        },
        queryParamsHandling: 'merge',
      });
    }
  }

}