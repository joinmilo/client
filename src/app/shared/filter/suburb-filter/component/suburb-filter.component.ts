import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { Maybe } from 'src/schema/schema';
import { SuburbFilterActions } from '../state/suburb-filter.actions';
import { selectSuburbs } from '../state/suburb-filter.selectors';

@Component({
  selector: 'app-suburb-filter',
  templateUrl: './suburb-filter.component.html',
  styleUrls: ['./suburb-filter.component.scss']
})
export class SuburbFilterComponent implements OnInit, OnDestroy {

  @Input()
  public queryParamKey = FilterQueryDefinition.suburbs;

  @Output()
  public valueChanged = new EventEmitter<Maybe<string[]> | undefined>();

  public control = new FormControl();

  private destroy = new Subject<void>();

  public suburbs = this.store.select(selectSuburbs).pipe(
    tap(suburbs => !suburbs?.length
      && this.store.dispatch(SuburbFilterActions.getSuburbs()))
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
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
