import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, isObservable, of } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from '../../card/card.module';
import { FlipCardOutput } from '../../card/typings/card';
import { FlipCardSliderInput, FlipCardSliderOutput } from './typings/flip-card-slider';


@Component({
  selector: 'app-flip-card-slider',
  templateUrl: './flip-card-slider.component.html',
  styleUrls: ['./flip-card-slider.component.scss'],
  standalone: true,
  imports: [
    CardModule,
    CommonModule,
    CoreModule,
  ]
})
export class FlipCardSliderComponent {

  @Input()
  public data?: Maybe<FlipCardSliderInput[]>;

  @Output()
  public elementClicked = new EventEmitter<FlipCardSliderOutput>();

  public getTitle(title: string | Observable<string>): Observable<string> {
    return isObservable(title)
      ? title
      : of(title);
  }

  public emit(
    element: FlipCardOutput,
    cardIndex: number): void {
      this.elementClicked.emit({
        cardIndex,
        elementIndex: element.index,
        elementLabel: element.label
      });
  }
}