import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Observable, Subject, isObservable, of } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { FlipCardOutput } from '../../card/typings/card';
import { FlipCardSliderInput, RoadmapOutput } from './typings/flip-card-slider';


@Component({
  selector: 'app-flip-card-slider',
  templateUrl: './flip-card-slider.component.html',
  styleUrls: ['./flip-card-slider.component.scss']
})
export class FlipCardSliderComponent implements OnDestroy{

  @Input()
  public data?: Maybe<FlipCardSliderInput[]>;

  private destroy = new Subject<void>();

  @Output()
  public elementClicked = new EventEmitter<RoadmapOutput>();

  getTitle(title: string | Observable<string>): Observable<string> {
    return isObservable(title)
      ? title
      : of(title);
  }

  emit(flipCardOutput: FlipCardOutput, index: number) {
    this.elementClicked.emit({
      milestoneindex: index,
      elementIndex: flipCardOutput.index,
      elementLabel: flipCardOutput.label
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}