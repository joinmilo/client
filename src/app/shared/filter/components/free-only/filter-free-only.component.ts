import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Maybe } from 'src/schema/schema';
import { FilterQueryParams } from '../../constants/filter.constants';
import { FilterActions } from '../../state/filter.actions';

@Component({
  selector: 'app-filter-free-only',
  templateUrl: './filter-free-only.component.html',
  styleUrls: ['./filter-free-only.component.scss']
})
export class FilterFreeOnlyComponent implements OnInit, OnDestroy {

  @Input()
  public queryParamKey = FilterQueryParams.freeOnly;

  @Output()
  public valueChanged = new EventEmitter<Maybe<boolean> | undefined>();

  public control = new FormControl();

  private destroy = new Subject<void>();

  constructor(
    private actions: Actions,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {

    //TODO: This seems hacky to subscribe to actions within a component
    this.actions.pipe(
      ofType(FilterActions.clearAll),
      takeUntil(this.destroy)
    ).subscribe(() => {
      this.control.patchValue(undefined);

      if (this.queryParamKey) {
        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: {
            [this.queryParamKey || '']: undefined
          },
          queryParamsHandling: 'merge',
        });
      }
    });
  }

  public ngOnInit(): void {
    // this.queryParamKey && this.activatedRoute.queryParams
    //   .pipe(take(1))
    //   .subscribe(params => {
    //     const value = typeof params[this.queryParamKey] === 'string'
    //       ? [params[this.queryParamKey]]
    //       : params[this.queryParamKey];
    //     this.control.patchValue(value);
    //     this.valueChanged.emit(value);
    //     this.store.dispatch(FilterActions.selectedEventCategories(value));
    //   });
  }

  public changeSelect(evnet: any): void {
    console.log(evnet);
    // if (this.queryParamKey) {
    //   this.router.navigate([], {
    //     relativeTo: this.activatedRoute,
    //     queryParams: {
    //       [this.queryParamKey || '']: true
    //     },
    //     queryParamsHandling: 'merge',
    //   });
    // }

    // this.valueChanged.emit(true);
    // this.store.dispatch(FilterActions.selectedEventCategories(categoryIds));
  }

  public ngOnDestroy(): void {
    // this.store.dispatch(FilterActions.selectedEventCategories(undefined));

    this.destroy.next();
    this.destroy.complete();
  }
  
}
