import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Maybe } from 'graphql/jsutils/Maybe';

@Component({
  selector: 'app-rating-average',
  templateUrl: './rating-average.component.html',
  styleUrls: ['./rating-average.component.scss'],
})
export class RatingAverageComponent {

  @Input()
  averageRating?: Maybe<number>;

  showIcon(index: number): IconProp {
    const rating = this.averageRating ?? 0;
    if (rating >= index + 1) {
      return ['fas', 'star'];
    } else if (rating >= index + 0.5) {
      return ['fas', 'star-half-alt'];
    } else {
      return ['far', 'star'];
    }
  }
}

