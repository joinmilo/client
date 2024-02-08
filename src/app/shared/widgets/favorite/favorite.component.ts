import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { IconComponent } from 'ngx-cinlib/icons';
import { TooltipDirective } from 'ngx-cinlib/tooltip';
import { Subject, take, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { selectIsAuthenticated, selectIsFavorite } from 'src/app/core/state/selectors/user.selectors';
import { ContentData, ContentEntity } from 'src/app/core/typings/content-entity';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    TooltipDirective,
    IconComponent,
    MatButtonModule,
  ]
})
export class FavoriteComponent implements OnChanges, OnDestroy {

  @Input({ required: true })
  public entity?: Maybe<ContentEntity>;

  @Input({ required: true })
  public data?: Maybe<ContentData>;

  @Input()
  public withLabel = false;

  public isFavorite = false;

  public addToFavoritesLabel = 'addToFavorites';
  public removeFromFavoritesLabel = 'removeFromFavorites';

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
  ) { }

  public ngOnChanges(): void {
    this.store.select(selectIsFavorite(this.entity, this.data?.id))
      .pipe(takeUntil(this.destroy))
      .subscribe(isFavorite => this.isFavorite = isFavorite);
  }

  public createTooltip(): Maybe<string> {
    return this.withLabel
      ? null
      : this.isFavorite
        ? this.removeFromFavoritesLabel
        : this.addToFavoritesLabel;
  }

  public changeFavorite(): void {
    this.store.select(selectIsAuthenticated)
      .pipe(take(1))
      .subscribe(isAuthenticated => isAuthenticated
        ? this.execute()
        : this.store.dispatch(CoreUserActions.requireLogin()));
  }
  
  private execute(): void {
    this.isFavorite
      ? this.store.dispatch(CoreUserActions.removeFavorite(this.entity, this.data?.id))
      : this.store.dispatch(CoreUserActions.addFavorite(this.entity, this.data?.id));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
