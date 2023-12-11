import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.scss'],
})
export class RatingInputComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public currentValue?: Maybe<number>;

  @Input()
  public disabled = false;

  @Input()
  public maxRating?: Maybe<number>;

  @Output()
  public valueSelected = new EventEmitter<number>();

  public hoveredValue?: Maybe<number>;

  public values?: number[];

  private destroy = new Subject<void>();

  public ngOnInit(): void {
    this.build();
  }

  public ngOnChanges(): void {
    this.build();
  }


  private build(): void {
    this.values = [];
    for (let i = 1; i <= (this.maxRating ?? 5); i++) {
      this.values.push(i);
    }
  }
    
  public hover(value?: number): void {
    this.hoveredValue = this.disabled
      ? undefined
      : value;
  }

  public icon(index: number): string {
    const value = this.hoveredValue ?? this.currentValue ?? 0;
  
    if (index - value >= 0.5 && index - value < 1) {
      return 'fas fa-star-half-alt'; 
    } else 
    if (value >= index) {
      return 'fas fa-star';
    } else {
      return 'far fa-star';
    }

  }

  logValues(): void {
  // console.log('hoveredValue', this.hoveredValue);
  // console.log('values', this.values);
  console.log('currentValue', this.currentValue);
}


  public emit(value: number): void {
    this.valueSelected.emit(value);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}

