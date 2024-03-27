import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import L, {
  FeatureGroup,
  LatLngBounds,
  Layer,
  Map,
  MapOptions,
  Marker,
  latLngBounds,
  tileLayer
} from 'leaflet';
import 'leaflet.markercluster';
import { combineLatest, map, take } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { mapLatitudeConfig, mapLongitudeConfig } from 'src/app/core/constants/configuration.constants';
import { locationTileLayerURL } from 'src/app/core/constants/url.constants';
import { selectConfiguration } from 'src/app/core/state/selectors/core.selectors';
import { MapQueryParams } from 'src/app/core/typings/filter-params/map-filter-param';
import { defaultBounds, markerClusterOptions, tileLayerOptions } from '../constants/map.constants';
import { MapMarkerService } from '../services/map-marker.service';
import { MarkerDefinition } from '../typings/map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {

  @Input()
  public set markerDefinition(markerDefinition: Maybe<MarkerDefinition[] | MarkerDefinition> | undefined) {
    this.markers = Array.isArray(markerDefinition)
      ? this.markerService.definitionsToMarkers(markerDefinition)
      : markerDefinition
        ? this.markerService.definitionToMarker(markerDefinition)
        : [];

    if (this.markers?.length) {
      this.bounds = new FeatureGroup(this.markers as Layer[]).getBounds();
    }

    this.addMarkersToMap();
  }
  
  @Input()
  public queryParams = true;

  public markers?: Maybe<Marker[]>;
  public leafletOptions?: MapOptions;
  public bounds?: LatLngBounds;
  private markerClusterGroup = L.markerClusterGroup(markerClusterOptions);
  private map?: Map;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
    private markerService: MapMarkerService
  ) {}

  public ngOnInit(): void {
    this.initMap();
    this.initQueryParams();
  }

  private initMap(): void {
    combineLatest([
      this.store.select(selectConfiguration(mapLongitudeConfig)),
      this.store.select(selectConfiguration(mapLatitudeConfig)),
    ]).pipe(
      take(1)
    ).subscribe(([longitudeConfig, latitudeConfig]) => {
      const mapOptions: MapOptions = {
        zoom: 14,
        center: [Number(longitudeConfig?.value), Number(latitudeConfig?.value)],
        zoomControl: false,
        attributionControl: false,
      };

      this.leafletOptions = {
        ...mapOptions,
        layers: [tileLayer(locationTileLayerURL, tileLayerOptions)]
      }
    });
  }

  private initQueryParams() {
    this.activatedRoute.queryParams.pipe(
      take(1),
      map((params) => {
        const nums = [
          MapQueryParams.southWestLat, MapQueryParams.southWestLng,
          MapQueryParams.northEastLat, MapQueryParams.northEastLng
        ].map((key) => parseFloat(params[key]));
        return nums.every((f) => !isNaN(f))
          ? latLngBounds(
            [nums[0], nums[1]],
            [nums[2], nums[3]]
          )
          : null;
      })
    ).subscribe(bounds => this.bounds = bounds
      ? bounds
      : this.markers?.length
        ? new FeatureGroup(this.markers as Layer[]).getBounds()
        : latLngBounds(defaultBounds)); 
  }

  public onMapReady(map: Map) {
    this.map = map;
    this.rerender();
    this.markerClusterGroup.addTo(map);
  }

  public addMarkersToMap(){
    if (this.markerClusterGroup != null) {
			this.markerClusterGroup.clearLayers();
			this.markerClusterGroup.addLayers(this.markers as Layer[]);
		}
  }

  public rerender(): void {
    setTimeout(() => this.map?.invalidateSize(true), 180);
  }

  public onMapPositionChange() {
    if (this.queryParams) {
      const bounds = this.map?.getBounds();
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {
          [MapQueryParams.southWestLat]: bounds?.getSouthWest()?.lat?.toFixed(7),
          [MapQueryParams.southWestLng]: bounds?.getSouthWest()?.lng?.toFixed(7),
          [MapQueryParams.northEastLat]: bounds?.getNorthEast()?.lat?.toFixed(7),
          [MapQueryParams.northEastLng]: bounds?.getNorthEast()?.lng?.toFixed(7),
        },
        queryParamsHandling: 'merge',
      });
    }
  }

  public ngOnDestroy() {
    this.markerService.cleanup();
  }
}
