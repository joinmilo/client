import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { maxRating } from 'src/app/core/constants/core.constants';
import { selectConfiguration } from 'src/app/core/state/selectors/core.selectors';
import { selectIsAuthenticated } from 'src/app/core/state/selectors/user.selectors';
import { Maybe, RatingDto } from 'src/schema/schema';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {

  @Input()
  public ratings?: Maybe<RatingDto>;

  @Input()
  public currentValue?: Maybe<number>;

  @Output()
  rating: EventEmitter<number> = new EventEmitter<number>();

  public maxRating = this.store.select(selectConfiguration(maxRating))
    .pipe(map(config => Number(config?.value)))

  constructor(
    private router: Router,
    private store: Store) { }

  public rated(value: number): void {
    this.store.select(selectIsAuthenticated)
      .pipe(take(1))
      .subscribe(isAuthenticated => isAuthenticated
        ? this.rating.emit(value)
        : this.router.navigate(['/user', 'login-required']));
  }
}
