import { Observable } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';

export type FlipCardSliderInput = {
  title: string | Observable<string>,
  elements: string[] | Observable<string>[],
  pictureUrl: Maybe<string>
}

export type FlipCardSliderOutput = {
  cardIndex: number,
  elementLabel: string,
  elementIndex: number
}