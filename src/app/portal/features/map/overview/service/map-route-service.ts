import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LatLngBounds, latLngBounds } from 'leaflet';
import { Observable, distinctUntilChanged } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DealFilterQueryDefinition } from 'src/app/core/typings/filter-params/deal-filter-param';
import { EventFilterQueryDefinition } from 'src/app/core/typings/filter-params/event-filter-param';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { FilterKey, MapQueryParams } from 'src/app/core/typings/filter-params/map-filter-param';
import { OrganisationFilterQueryDefinition } from 'src/app/core/typings/filter-params/organisation-filter-param';

@Injectable({
  providedIn: 'root'
})
export class MapRouteService {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  public mapBoundsQueryParams(): Observable<LatLngBounds | null> {
    return this.route.queryParams.pipe(
      map((params) => {
          const nums = [
            MapQueryParams.southWestLat, MapQueryParams.southWestLng,
            MapQueryParams.northEastLat, MapQueryParams.northEastLng
          ].map((key) => parseFloat(params[key]));

          if (nums.every((f) => !isNaN(f))) {
            return latLngBounds([nums[0], nums[1]], [nums[2], nums[3]])
          } else {
            return null;
          }
        }
      ),
      distinctUntilChanged()
    );
  }

  public setMapBoundsParams(bounds?: LatLngBounds) {
    this.updateParams({
      [MapQueryParams.southWestLat]: bounds?.getSouthWest()?.lat?.toFixed(7),
      [MapQueryParams.southWestLng]: bounds?.getSouthWest()?.lng?.toFixed(7),
      [MapQueryParams.northEastLat]: bounds?.getNorthEast()?.lat?.toFixed(7),
      [MapQueryParams.northEastLng]: bounds?.getNorthEast()?.lng?.toFixed(7),
    });
  }

  public changeFilterKeyQueryParams(filter: FilterKey) {
    this.updateParams({
      ...this.clearFilterParams(),
      [MapQueryParams.filter]: filter}
    )
  }

  public filterKeyQueryParam(): Observable<FilterKey> {
    return this.route.queryParams.pipe(
      map((params) => parseInt(params[MapQueryParams.filter])),
      filter((key) => !isNaN(key)),
      distinctUntilChanged()
    );
  }

  private clearFilterParams(): Record<string, null> {
    const params: Record<string, null> = {};
    [
      ...Object.values(EventFilterQueryDefinition),
      ...Object.values(DealFilterQueryDefinition),
      ...Object.values(OrganisationFilterQueryDefinition),
      ...Object.values(FilterQueryDefinition)
    ].forEach((key) => params[key] = null);
    return params;
  }

  private updateParams(params: Params) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}

