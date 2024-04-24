import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { collapse } from 'ngx-cinlib/core';
import { FilterService } from 'ngx-cinlib/filters';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { DealFilterQueryDefinition, DealFilterQueryParams } from 'src/app/core/typings/filter-params/deal-filter-param';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { transformFn } from '../utils/params.utils';

@Component({
  selector: 'app-deal-filter',
  templateUrl: './deal-filter.component.html',
  styleUrls: ['./deal-filter.component.scss'],
  animations: [
    collapse()
  ],
})
export class DealFilterComponent implements OnInit, OnDestroy {

  @Output()
  public paramsUpdated = new EventEmitter<FilterSortPaginateInput>();

  @Output()
  public rawParamsUpdated = new EventEmitter<Maybe<DealFilterQueryParams>>();

  public disableOfferFilter?: Maybe<boolean>;
  
  public disableSearchFilter?: Maybe<boolean>;

  private destroy = new Subject<void>();
  
  constructor(
    private filterService: FilterService,
  ) { }
  
  public ngOnInit(): void {
    this.filterService.init({
      ...FilterQueryDefinition,
      ...DealFilterQueryDefinition
    });

    this.filterService.queryParams()
      .pipe(takeUntil(this.destroy))
      .subscribe(params => {
        this.rawParamsUpdated.next(params);
        this.paramsUpdated.next(transformFn(params));

        if (params) {
          this.disableSearchFilter = typeof params[DealFilterQueryDefinition.offerOnly] === 'string'
            ? params[DealFilterQueryDefinition.offerOnly] === 'true'
            : params[DealFilterQueryDefinition.offerOnly];

          this.disableOfferFilter = typeof params[DealFilterQueryDefinition.searchOnly] === 'string'
            ? params[DealFilterQueryDefinition.searchOnly] === 'true'
            : params[DealFilterQueryDefinition.searchOnly];
          }
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}