import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { collapse } from 'ngx-cinlib/core';
import { FilterService } from 'ngx-cinlib/filters';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { EventFilterQueryDefinition, EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { transformFn } from '../utils/transform.utils';

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.scss'],
  animations: [
    collapse()
  ],
})
export class EventFilterComponent implements OnInit, OnDestroy {

  @Output()
  public paramsUpdated = new EventEmitter<FilterSortPaginateInput>();

  @Output()
  public rawParamsUpdated = new EventEmitter<Maybe<EventFilterQueryParams>>();

  public disbleDateFilter = false;

  private destroy = new Subject<void>();
  
  constructor(
    private filterService: FilterService,
  ) { }
  
  public ngOnInit(): void {
    this.filterService.init({
      ...FilterQueryDefinition,
      ...EventFilterQueryDefinition
    });

    this.filterService.queryParams()
      .pipe(takeUntil(this.destroy))
      .subscribe(params => {
        this.rawParamsUpdated.next(params);
        this.paramsUpdated.next(transformFn(params));
        this.disbleDateFilter = !!params?.[EventFilterQueryDefinition.past];
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}