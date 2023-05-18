import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MapFeatureActions} from '../../state/map.actions';
import {selectActiveFilter, selectPois, selectResults} from '../../state/map.selector';
import {
  FilterKey,
  iconOptions,
  mapOptions,
  markerClusterOptions,
  popupOptions,
  tileLayerOptions,
  tileLayerURL,
  defaultBounds
} from '../../constants/map.constants';
import {
  divIcon,
  FeatureGroup,
  latLng,
  latLngBounds,
  LatLngBounds,
  Layer,
  Map,
  MapOptions,
  Marker,
  marker,
  tileLayer
} from 'leaflet';
import {concat, combineLatest, filter, map, Observable, of, startWith, take, combineAll, first} from 'rxjs';
import {MapComponentsService} from '../../service/map-components.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {PointOfInterest} from '../../typings/point-of-interest';
import {MapRouteService} from '../../service/map-route-service';


@Component({
  selector: 'app-portal-map-page',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapPageComponent implements OnInit, OnDestroy {

  public FilterKey: typeof FilterKey = FilterKey;

  public activeFilter = this.store.select(selectActiveFilter);
  public results = this.store.select(selectResults);
  private pois = this.store.select(selectPois);

  public markers: Observable<Layer[]>;
  public mapBounds: Observable<LatLngBounds>;

  public isLandscape: Observable<boolean>;
  public isDesktop: Observable<boolean>;

  public showFilter = false;
  public showMenuInDesktop = true;

  private map?: Map;

  public readonly leafletOptions: MapOptions;
  public readonly markerClusterOptions = markerClusterOptions;

  private readonly orientations = {
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)'
  };

  constructor(
    private store: Store,
    private components: MapComponentsService,
    private breakpointObserver: BreakpointObserver,
    private mapRouteService: MapRouteService
  ) {
    this.leafletOptions = {
      ...mapOptions,
      layers: [tileLayer(tileLayerURL, tileLayerOptions)]
    }

    this.markers = this.pois.pipe(
      map((pois) => pois.map((poi) => this.poiToMarker(poi))),
    );

    this.isLandscape = breakpointObserver
      .observe([this.orientations.portrait, this.orientations.landscape,])
      .pipe(map((result) => result.matches && result.breakpoints[this.orientations.landscape]));
    this.isDesktop = breakpointObserver
      .observe('(min-width: 1024px)')
      .pipe(map((result) => result.matches));

    this.mapBounds = this.setupBoundsSource();

    this.mapRouteService.filterQueryParams(FilterKey.events).pipe(
      take(1),
    ).subscribe(([key, choices]) => {
      this.store.dispatch(MapFeatureActions.setActiveFilter({key}))
      switch(key) {
        case FilterKey.deals:
          return this.store.dispatch(MapFeatureActions.setDealFilter(choices || {}));
        case FilterKey.events:
          return this.store.dispatch(MapFeatureActions.setEventFilter(choices || {}));
        case FilterKey.organisations:
          return this.store.dispatch(MapFeatureActions.setOrganisationFilter(choices || {}));
      }
    });
  }

  ngOnInit() {
    this.store.dispatch(MapFeatureActions.getFilterOptions());
  }

  ngOnDestroy() {
    this.components.cleanup();
  }

  setFilter(key: FilterKey) {
    this.store.dispatch(MapFeatureActions.setActiveFilter({key}));
  }

  poiToMarker(poi: PointOfInterest): Marker {
    const icon = divIcon({
      ...iconOptions,
      html: this.components.createMarkerElement(poi)
    });
    const popup = this.components.createPopupElement(poi);
    return marker(latLng(poi.latitude, poi.longitude), { icon })
      .bindPopup(popup, popupOptions);
  }

  onMapReady(map: Map) {
    this.map = map;
  }

  onMapPositionChange() {
    this.mapRouteService.setMapBoundsParams(this.map?.getBounds());
  }

  toggleMenu() {
    this.showMenuInDesktop = !this.showMenuInDesktop;
    setTimeout(() => this.map?.invalidateSize(true), 100);
  }

  private setupBoundsSource(): Observable<LatLngBounds> {
    const boundsFromMarkers = this.markers.pipe(
      filter((markers) => markers.length > 0),
      map((markers) => new FeatureGroup(markers).getBounds()),
    );
    const boundsFromRoute = this.mapRouteService.mapBoundsQueryParams().pipe(
      take(1)
    );
    const preferRouteOnFirstEmit = combineLatest([boundsFromMarkers, boundsFromRoute]).pipe(
      map(([markerBounds, routeBounds], idx) => {
        if (idx == 0 && routeBounds) {
          return routeBounds;
        }
        return markerBounds;
      })
    );
    return concat(
      // we need to prepend the route bounds in case no markers are present and nothing emits
      boundsFromRoute.pipe(map((bounds) => bounds ? bounds : latLngBounds(defaultBounds))),
      preferRouteOnFirstEmit
    );
  }
}
