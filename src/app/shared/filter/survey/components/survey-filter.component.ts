import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Maybe } from 'ngx-cinlib/core';
import { FilterService } from 'ngx-cinlib/filters';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { SurveyFilterQueryDefinition, SurveyFilterQueryParams } from 'src/app/core/typings/filter-params/survey-filter-param';
import { transformFn } from '../utils/transform.utils';

@Component({
  selector: 'app-survey-filter',
  templateUrl: './survey-filter.component.html',
  styleUrls: ['./survey-filter.component.scss'],
})
export class SurveyFilterComponent implements OnInit, OnDestroy {

  @Output()
  public paramsUpdated = new EventEmitter<FilterSortPaginateInput>();

  @Output()
  public rawParamsUpdated = new EventEmitter<Maybe<SurveyFilterQueryParams>>();

  private destroy = new Subject<void>();
  
  constructor(
    private filterService: FilterService,
  ) { }
  
  public ngOnInit(): void {
    this.filterService.init({
      ...FilterQueryDefinition,
      ...SurveyFilterQueryDefinition
    });

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