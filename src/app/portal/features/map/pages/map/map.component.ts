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
  FitBoundsOptions,
  latLng,
  LatLngBounds,
  Layer,
  Map,
  MapOptions,
  Marker,
  marker,
  MarkerClusterGroup,
  MarkerClusterGroupOptions,
  PopupOptions,
  tileLayer
} from 'leaflet';
import {CardData, CardEntity} from 'src/app/shared/card/typings/card';
import {map, Observable} from 'rxjs';
import {dataToElement} from 'src/app/core/utils/card.utils';
import {MapComponentsService} from '../../service/map-components.service';


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

  public readonly defaultBounds = new LatLngBounds([[51.246938, 7.121244], [51.273150, 7.186175]]);

  // TODO: Get colors/icons from API
  private markerColors = ["#54A6CB", "#A1C062", "#CB9F47", "#A6463D", ""]
  private markerIcons = ["fitness", "school", "music", "restaurant", "invalid"]

  public readonly leafletOptions: MapOptions = {
    layers:[tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      opacity: 0.7,
      minZoom: 8,
      maxZoom: 19,
      detectRetina: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

    })],
    zoom:14,
    center:latLng(51.256214, 7.150764),
  };

  public readonly markerClusterOptions: MarkerClusterGroupOptions = {
    showCoverageOnHover: false,
    zoomToBoundsOnClick: false,
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

  private readonly zoomFitOptions: FitBoundsOptions = {
    paddingTopLeft: [0, 32],
    paddingBottomRight: [0, 16]
  }

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private components: MapComponentsService,
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
    )
  }

  ngOnInit() {
    this.store.dispatch(MapFeatureActions.getFilterOptions())
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

  mapReady(map: Map) {
    map.attributionControl.setPosition('topright');
  }

  markerClusterReady(markerCluster: MarkerClusterGroup) {
    // replace the standard zoom to cluster (toggled in options) to have a padding
    markerCluster.on('clusterclick', (event) => {
      event.propagatedFrom.zoomToBounds(this.zoomFitOptions)
    });
  }
}
