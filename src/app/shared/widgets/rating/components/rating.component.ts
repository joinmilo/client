import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { maxRatingConfig } from 'src/app/core/constants/configuration.constants';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { selectConfiguration } from 'src/app/core/state/selectors/core.selectors';
import { selectIsAuthenticated } from 'src/app/core/state/selectors/user.selectors';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {

  @Input()
  public set ratings(ratings: Maybe<AnalyticsDto>) {
    this._ratings = {...ratings, series: ratings?.series?.reverse()};
  }

  public get ratings(): Maybe<AnalyticsDto> {
    return this._ratings;
  }

  public _ratings: Maybe<AnalyticsDto>;

  @Input()
  public currentValue?: Maybe<number>;

  @Output()
  rating: EventEmitter<number> = new EventEmitter<number>();

  public maxRating = this.store.select(selectConfiguration(maxRatingConfig))
    .pipe(map(config => Number(config?.value)))

  constructor(
    private store: Store) { }

  public rated(value: number): void {
    this.store.select(selectIsAuthenticated)
      .pipe(take(1))
      .subscribe(isAuthenticated => isAuthenticated
        ? this.rating.emit(value)
        : this.store.dispatch(CoreUserActions.requireLogin()));
  }
}
