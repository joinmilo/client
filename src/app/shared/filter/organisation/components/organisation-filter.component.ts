import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { collapse } from 'ngx-cinlib/core';
import { FilterService } from 'ngx-cinlib/filters';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { OrganisationFilterQueryDefinition, OrganisationFilterQueryParams } from 'src/app/core/typings/filter-params/organisation-filter-param';
import { transformFn } from '../utils/transform.utils';

@Component({
  selector: 'app-organisation-filter',
  templateUrl: './organisation-filter.component.html',
  styleUrls: ['./organisation-filter.component.scss'],
  animations: [
    collapse()
  ],
})
export class OrganisationFilterComponent implements OnInit, OnDestroy {

  @Output()
  public paramsUpdated = new EventEmitter<FilterSortPaginateInput>();

  @Output()
  public rawParamsUpdated = new EventEmitter<Maybe<OrganisationFilterQueryParams>>();

  private destroy = new Subject<void>();
  
  constructor(
    private filterService: FilterService,
  ) { }
  
  public ngOnInit(): void {
    this.filterService.init({
      ...FilterQueryDefinition,
      ...OrganisationFilterQueryDefinition
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