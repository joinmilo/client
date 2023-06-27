import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import { DealFilterQueryDefinition } from 'src/app/core/typings/filter-params/deal-filter-param';
import { Maybe } from 'src/schema/schema';
import { DealFilterActions } from '../../state/deal-filter.actions';
import { selectCategories } from '../../state/deal-filter.selectors';

@Component({
  selector: 'app-deal-filter-category',
  templateUrl: './deal-filter-category.component.html',
  styleUrls: ['./deal-filter-category.component.scss']
})
export class DealFilterCategoryComponent implements OnInit, OnDestroy {

  @Input()
  public queryParamKey = DealFilterQueryDefinition.dealCategories;

  @Output()
  public valueChanged = new EventEmitter<Maybe<string[]> | undefined>();

  public control = new FormControl();

  private destroy = new Subject<void>();

  public categories = this.store.select(selectCategories).pipe(
    tap(categories => !categories?.length
      && this.store.dispatch(DealFilterActions.getCategories()))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    this.watchValueChange();
  }
  
  public ngOnInit(): void {
    this.queryParamKey && this.activatedRoute.queryParams
      .pipe(takeUntil(this.destroy))
      .subscribe(params => {
        const value = typeof params[this.queryParamKey] === 'string'
          ? [params[this.queryParamKey]]
          : params[this.queryParamKey];

        this.control.setValue(value, {
          emitEvent: false,
        });
      });
  }

  private watchValueChange(): void {
    this.control.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe((ids: Maybe<string[]>) => {
        if (this.queryParamKey) {
          this.router.navigate([], {
            
            queryParams: {
              [this.queryParamKey || '']: ids
            },
            queryParamsHandling: 'merge',
          });
        }

        this.valueChanged.emit(ids);
        this.store.dispatch(DealFilterActions.selectedCategories(ids));
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
