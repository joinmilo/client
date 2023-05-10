import {ActivatedRoute} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MapFeatureActions} from '../../state/map.actions';
import {selectActiveFilter, selectResults} from '../../state/map.selector';
import {defaultMarkerColor, FilterKey} from '../../constants/map.constants';
import {
  divIcon,
  DivIconOptions,
  FeatureGroup,
  latLng,
  LatLngBounds,
  Layer,
  Map,
  MapOptions,
  Marker,
  marker,
  MarkerClusterGroupOptions,
  PopupOptions,
  tileLayer
} from 'leaflet';
import {CardData, CardEntity} from 'src/app/shared/card/typings/card';
import {map, Observable, Subject, takeUntil} from 'rxjs';
import {dataToElement} from 'src/app/core/utils/card.utils';
import {MapComponentsService} from '../../service/map-components.service';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {tap} from 'rxjs/operators';


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

  public isLandscape: Observable<Boolean>;

  public showFilter = false;

  public readonly defaultBounds = new LatLngBounds([[51.246938, 7.121244], [51.273150, 7.186175]]);

  // TODO: Get colors/icons from API
  private markerColors = ["#54A6CB", "#A1C062", "#CB9F47", "#A6463D", ""]
  private markerIcons = ["fitness", "school", "music", "restaurant", "invalid"]

  public readonly leafletOptions: MapOptions = {
    layers:[tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      opacity: 0.7,  // TODO: Adjust when adding final map
      minZoom: 8,
      maxZoom: 19,
      detectRetina: true,
    })],
    zoom:14,
    center:latLng(51.256214, 7.150764),
    zoomControl: false,
    attributionControl: false,
  };

  public readonly markerClusterOptions: MarkerClusterGroupOptions = {
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    spiderLegPolylineOptions: {
      weight: 2,
      color: defaultMarkerColor,
      opacity: 0.8
    }
  };

  private readonly iconOptions: DivIconOptions = {
    className: 'marker',
    iconSize: [28, 40],
    popupAnchor: [0, 20]
  }

  private readonly popupOptions: PopupOptions = {
    closeButton: false,
    offset: [0, -24],
    maxWidth: 320
  }

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
    const markerGroup = this.results.pipe(
      map((results) => results?.data
        .map((cardData) => this.cardToMarker(results.entity, cardData))
        .filter(Boolean) as Marker[]
      ),
      map((markers) => new FeatureGroup(markers)),
    );
    this.markers = markerGroup.pipe(map((group) => group.getLayers()))
    this.mapBounds = markerGroup.pipe(
      map((group) => group.getLayers().length > 0
        ? group.getBounds()
        : this.defaultBounds
      ),
    );
    this.isLandscape = breakpointObserver.observe([
      this.orientations.portrait,
      this.orientations.landscape,
    ]).pipe(
      map((result) => result.matches && result.breakpoints[this.orientations.landscape]),
    );
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

  cardToMarker(entity: CardEntity, data: CardData): Marker | null {
    const elem = dataToElement(entity, data);
    if (elem?.address?.latitude && elem?.address?.longitude) {
      const icon = divIcon({
        ...this.iconOptions,
        html: this.components.createMarkerElement(
          // TODO: Use colors/icons from API
          this.markerColors[Math.floor(Math.random()*this.markerColors.length)],
          this.markerIcons[Math.floor(Math.random()*this.markerIcons.length)]
        ),
      });
      const popup = this.components.createPopupElement(entity, data);
      const result = marker(latLng(elem?.address?.latitude, elem?.address?.longitude), { icon });
      result.bindPopup(() => popup, this.popupOptions);
      return result;
    } else {
      return null;
    }
  }
}
