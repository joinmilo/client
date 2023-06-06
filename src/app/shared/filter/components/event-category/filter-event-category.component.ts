import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject, take, takeUntil, tap } from 'rxjs';
import { Maybe } from 'src/schema/schema';
import { FilterQueryParams } from '../../constants/filter.constants';
import { FilterActions } from '../../state/filter.actions';
import { selectEventCategories } from '../../state/filter.selectors';

@Component({
  selector: 'app-filter-event-category',
  templateUrl: './filter-event-category.component.html',
  styleUrls: ['./filter-event-category.component.scss']
})
export class FilterEventCategoryComponent implements OnInit, OnDestroy {

  @Input()
  public queryParamKey = FilterQueryParams.categories;

  @Output()
  public valueChanged = new EventEmitter<Maybe<string[]> | undefined>();

  public control = new FormControl();

  private destroy = new Subject<void>();

  public categories = this.store.select(selectEventCategories).pipe(
    tap(categories => !categories?.length
      && this.store.dispatch(FilterActions.getEventCategories()))
  );

  constructor(
    private actions: Actions,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    this.watchClear();
    this.watchValueChange();
  }
  
    public ngOnInit(): void {
      this.queryParamKey && this.activatedRoute.queryParams
        .pipe(take(1))
        .subscribe(params => {
          const value = typeof params[this.queryParamKey] === 'string'
            ? [params[this.queryParamKey]]
            : params[this.queryParamKey];
          this.control.setValue(value, {
            emitEvent: false,
          });
        });
    }

  private watchClear(): void {
    //TODO: This seems hacky to subscribe to actions within a component
    this.actions.pipe(
      ofType(FilterActions.clearAll),
      takeUntil(this.destroy)
    ).subscribe(() => this.control.patchValue(undefined));
  }

  private watchValueChange(): void {
    this.control.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe((ids: Maybe<string[]>) => {
        if (this.queryParamKey) {
          this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
              [this.queryParamKey || '']: ids
            },
            queryParamsHandling: 'merge',
          });
        }

        this.valueChanged.emit(ids);
        this.store.dispatch(FilterActions.selectedEventCategories(ids));
      });
  }

  public ngOnDestroy(): void {
    this.control.patchValue(undefined);

    this.destroy.next();
    this.destroy.complete();
  }

}
