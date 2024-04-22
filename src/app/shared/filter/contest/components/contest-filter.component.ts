import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Maybe, collapse } from 'ngx-cinlib/core';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';

import { FilterService } from 'ngx-cinlib/filters';
import { ContestFilterQueryDefinition, ContestFilterQueryParams } from 'src/app/core/typings/filter-params/contest-filter-param';
import { transformFn } from '../utils/transform.utils';

@Component({
  selector: 'app-contest-filter',
  templateUrl: './contest-filter.component.html',
  styleUrls: ['./contest-filter.component.scss'],
  animations: [
    collapse()
  ],
})
export class ContestFilterComponent implements OnInit, OnDestroy {

  @Output()
  public paramsUpdated = new EventEmitter<FilterSortPaginateInput>();

  @Output()
  public rawParamsUpdated = new EventEmitter<Maybe<ContestFilterQueryParams>>();

  private destroy = new Subject<void>();
  
  constructor(
    private filterService: FilterService,
  ) { }
  
  public ngOnInit(): void {
    this.filterService.init(ContestFilterQueryDefinition);

    this.filterService.queryParams()
      .pipe(takeUntil(this.destroy))
      .subscribe(params => {
        this.rawParamsUpdated.next(params);
        this.paramsUpdated.next(transformFn(params));
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}