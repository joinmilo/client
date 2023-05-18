import {Injectable} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DealOfferStatus, FilterKey, MapParam} from '../constants/map.constants';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MapState} from '../state/map.reducer';
import {latLngBounds, LatLngBounds} from 'leaflet';

type FilterChoices = MapState['dealFilter']
  | MapState['eventFilter']
  | MapState['organisationFilter'];


@Injectable({
  providedIn: 'root'
})
export class MapRouteService {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  public readonly nulledFilterParams = {
    [MapParam.filter]: null,
    [MapParam.rating]: null,
    [MapParam.suburb]: null,
    [MapParam.targetGroup]: null,
    [MapParam.category]: null,
    [MapParam.rangeStart]: null,
    [MapParam.rangeEnd]: null,
    [MapParam.eventfree]: null,
    [MapParam.eventPast]: null,
    [MapParam.offerStatus]: null,
  }

  public mapBoundsQueryParams(): Observable<LatLngBounds | null> {
    return this.route.queryParams.pipe(
      map((params) => {
          const nums = [
            MapParam.southWestLat, MapParam.southWestLng,
            MapParam.northEastLat, MapParam.northEastLng
          ].map((key) => parseFloat(params[key]));

          if (nums.every((f) => !isNaN(f))) {
            return latLngBounds([nums[0], nums[1]], [nums[2], nums[3]])
          } else {
            return null;
          }
        }
      )
    );
  }

  public filterQueryParams(defaultKey: FilterKey): Observable<[FilterKey, FilterChoices]> {
    return this.route.queryParams.pipe(
      map((params) => {
        const key = Number(params[MapParam.filter])
        switch(key) {
          case FilterKey.deals:
            return [key, {
              categoryId: params[MapParam.category],
              suburbId: params[MapParam.suburb],
              offerStatus: Object.values(DealOfferStatus).includes(Number(params[MapParam.offerStatus]))
                ? Number(params[MapParam.offerStatus])
                : undefined,
            }];
          case FilterKey.events:
            return [key, {
              categoryId: params[MapParam.category],
              suburbId: params[MapParam.suburb],
              targetGroupId: params[MapParam.targetGroup],
              showPastEvents: params[MapParam.eventPast] === 'true',
              showOnlyAdmissionFree: params[MapParam.eventfree] === 'true',
              dateRange: {
                start: params[MapParam.rangeStart],
                end: params[MapParam.rangeEnd],
              }
            }];
          case FilterKey.organisations:
            return [key, {
              rating: params[MapParam.rating],
              suburbId: params[MapParam.suburb]
            }]
          default:
            return [defaultKey, {}];
        }
      })
    );
  }

  public setMapBoundsParams(bounds?: LatLngBounds) {
    this.updateParams({
      [MapParam.southWestLat]: bounds?.getSouthWest()?.lat?.toFixed(7),
      [MapParam.southWestLng]: bounds?.getSouthWest()?.lng?.toFixed(7),
      [MapParam.northEastLat]: bounds?.getNorthEast()?.lat?.toFixed(7),
      [MapParam.northEastLng]: bounds?.getNorthEast()?.lng?.toFixed(7),
    });
  }

  public setDealFilterParams(params: MapState['dealFilter']) {
    this.updateFilterParams({
      [MapParam.filter]: FilterKey.deals,
      [MapParam.category]: params?.categoryId,
      [MapParam.suburb]: params?.suburbId,
      [MapParam.offerStatus]: params?.offerStatus
    });
  }

  public setEventFilterParams(params: MapState['eventFilter']) {
    this.updateFilterParams({
      [MapParam.filter]: FilterKey.events,
      [MapParam.category]: params?.categoryId,
      [MapParam.suburb]: params?.suburbId,
      [MapParam.targetGroup]: params?.targetGroupId,
      [MapParam.eventPast]: params?.showPastEvents,
      [MapParam.eventfree]: params?.showOnlyAdmissionFree,
      [MapParam.rangeStart]: params?.dateRange?.start,
      [MapParam.rangeEnd]: params?.dateRange?.end
    });
  }

  public setOrganisationFilterParams(params: MapState['organisationFilter']) {
    this.updateFilterParams({
      [MapParam.filter]: FilterKey.organisations,
      [MapParam.rating]: params?.rating,
      [MapParam.suburb]: params?.suburbId
    });
  }

  private updateFilterParams(params: Params) {
    Object.keys(params)  // don't put '' or undefined in the URL
      .filter((k) => !params[k] && params[k] !== false)
      .forEach((k) => params[k] = null);
    this.updateParams({
      ...this.nulledFilterParams,  // remove unused params from URL
      ...params
    });
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

