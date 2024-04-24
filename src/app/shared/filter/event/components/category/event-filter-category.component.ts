import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FilterService } from 'ngx-cinlib/filters';
import { Subject, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { EventFilterQueryDefinition } from 'src/app/core/typings/filter-params/event-filter-param';
import { EventFilterActions } from '../../state/event-filter.actions';
import { selectCategories } from '../../state/event-filter.selectors';

@Component({
  selector: 'app-event-filter-category',
  templateUrl: './event-filter-category.component.html',
  styleUrls: ['./event-filter-category.component.scss']
})
export class EventFilterCategoryComponent implements OnInit, OnDestroy {

  @Input()
  public queryParamKey = EventFilterQueryDefinition.eventCategories;

  @Output()
  public valueChanged = new EventEmitter<Maybe<string[]> | undefined>();

  public control = new FormControl();

  private destroy = new Subject<void>();

  public categories = this.store.select(selectCategories);

  constructor(
    private filterService: FilterService,
    private store: Store,
  ) {
    this.store.dispatch(EventFilterActions.getCategories());
    this.watchValueChange();
  }
  
  public ngOnInit(): void {
    this.filterService.queryParams()
      .pipe(takeUntil(this.destroy))
      .subscribe(params => {
        const value = typeof params?.[this.queryParamKey] === 'string'
          ? [params[this.queryParamKey]]
          : params?.[this.queryParamKey];

        this.control.setValue(value, {
          emitEvent: false,
        });
      });
  }

  private watchValueChange(): void {
    this.control.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe((ids: Maybe<string[]>) => {

        this.valueChanged.emit(ids);
        this.filterService.updateParam(this.queryParamKey, ids);
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
