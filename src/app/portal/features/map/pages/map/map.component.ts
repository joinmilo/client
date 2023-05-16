import {ActivatedRoute} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MapFeatureActions} from '../../state/map.actions';
import {selectActiveFilter, selectPois, selectResults} from '../../state/map.selector';
import {
  FilterKey,
  iconOptions,
  mapOptions, markerClusterOptions,
  popupOptions, tileLayerOptions,
  tileLayerURL, wuppertalBounds
} from '../../constants/map.constants';
import {
  divIcon,
  FeatureGroup,
  latLng, latLngBounds,
  LatLngBounds,
  Layer,
  MapOptions,
  Marker,
  marker,
  tileLayer
} from 'leaflet';
import {map, Observable, startWith} from 'rxjs';
import {MapComponentsService} from '../../service/map-components.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {PointOfInterest} from '../../typings/point-of-interest';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-portal-map-page',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapPageComponent implements OnInit, OnDestroy {

  public FilterKey: typeof FilterKey = FilterKey;

  public activeFilter = this.store.select(selectActiveFilter);

  public results = this.store.select(selectResults);

  public markers: Observable<Layer[]>;

  public mapBounds: Observable<LatLngBounds>;

  public isLandscape: Observable<boolean>;

  public isDesktop: Observable<boolean>;

  public showFilter = false;

  public readonly leafletOptions: MapOptions;

  public readonly markerClusterOptions = markerClusterOptions;

  private pois = this.store.select(selectPois);

  private readonly orientations = {
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)'
  };

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private components: MapComponentsService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.leafletOptions = {
      ...mapOptions,
      layers: [tileLayer(tileLayerURL, tileLayerOptions)]
    }

    this.markers = this.pois.pipe(
      map((pois) => pois.map((poi) => this.poiToMarker(poi))),
    );
    this.mapBounds = this.markers.pipe(
      filter((markers) => markers.length > 0),
      map((markers) => new FeatureGroup(markers).getBounds()),
      startWith(latLngBounds(wuppertalBounds))
    );

    this.isLandscape = breakpointObserver
      .observe([this.orientations.portrait, this.orientations.landscape,])
      .pipe(map((result) => result.matches && result.breakpoints[this.orientations.landscape]));
    this.isDesktop = breakpointObserver
      .observe('(min-width: 1024px)')
      .pipe(map((result) => result.matches));
  }

  ngOnInit() {
    this.store.dispatch(MapFeatureActions.getFilterOptions())
    this.setFilter(FilterKey.events);
  }

  ngOnDestroy() {
    this.components.cleanup();
  }

  setFilter(key: FilterKey) {
    this.store.dispatch(MapFeatureActions.setActiveFilter({key}))
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
}
