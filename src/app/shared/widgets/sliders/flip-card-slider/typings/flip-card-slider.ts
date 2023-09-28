import { Maybe } from 'graphql/jsutils/Maybe';
import { Observable } from 'rxjs';

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