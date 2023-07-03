import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Maybe, RatingDto, UserContextEntity } from 'src/schema/schema';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {

  @Input()
  ratingDto?: Maybe<RatingDto> | undefined;

  @Input()
  currentUser?: Maybe<UserContextEntity> | undefined;

  @Input()
  currentRatingScore?: Maybe<number>;

  @Output()
  rating: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  content: EventEmitter<string> = new EventEmitter<string>();

  emitContent($event: string) {
    this.content?.emit($event);
  }

  emitRating($event: number) {
    this.rating.emit($event);
  }
}
