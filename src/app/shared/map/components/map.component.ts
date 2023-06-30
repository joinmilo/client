import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  FeatureGroup,
  LatLngBounds,
  Layer,
  Map,
  MapOptions,
  Marker,
  latLngBounds,
  tileLayer
} from 'leaflet';
import { combineLatest, map, take } from 'rxjs';
import { mapLatitudeConfig, mapLongitudeConfig, tileLayerURL } from 'src/app/core/constants/core.constants';
import { selectConfiguration } from 'src/app/core/state/core.selectors';
import { MapQueryParams } from 'src/app/core/typings/filter-params/map-filter-param';
import { Maybe } from 'src/schema/schema';
import { defaultBounds, markerClusterOptions, tileLayerOptions } from '../constants/map.constants';
import { MapMarkerService } from '../services/map-marker.service';
import { MarkerDefinition } from '../typings/map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public markerDefinition?: Maybe<MarkerDefinition[] | MarkerDefinition>;
  
  @Input()
  public queryParams = true;

  public markers?: Maybe<Marker[]>;
  public leafletOptions?: MapOptions;
  public bounds?: LatLngBounds;
  public markerClusterOptions = markerClusterOptions;
  
  private map?: Map;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
    private markerService: MapMarkerService
  ) {
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
        layers: [tileLayer(tileLayerURL, tileLayerOptions)]
      }
    });
  }

  public ngOnInit(): void {
    this.dataToMarkers();
    this.initQueryParams();
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
    ).subscribe(bounds => {
      this.bounds = bounds
        ? bounds
        : this.markers?.length
          ? new FeatureGroup(this.markers as Layer[]).getBounds()
          : latLngBounds(defaultBounds);
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['markerDefinition']) {
      this.dataToMarkers();
    }
  }

  public dataToMarkers(): void {
    this.markers = Array.isArray(this.markerDefinition)
      ? this.markerService.definitionsToMarkers(this.markerDefinition)
      : this.markerDefinition
        ? this.markerService.definitionToMarker(this.markerDefinition)
        : [];
  }

  public onMapReady(map: Map) {
    this.map = map;
    this.rerender();
  }

  public rerender(): void {
    setTimeout(() => this.map?.invalidateSize(true), 180);
  }

  public onMapPositionChange() {
    if (this.queryParams) {
      const bounds = this.map?.getBounds();
      this.router.navigate([], {
        queryParams: {
          [MapQueryParams.southWestLat]: bounds?.getSouthWest()?.lat?.toFixed(7),
          [MapQueryParams.southWestLng]: bounds?.getSouthWest()?.lng?.toFixed(7),
          [MapQueryParams.northEastLat]: bounds?.getNorthEast()?.lat?.toFixed(7),
          [MapQueryParams.northEastLng]: bounds?.getNorthEast()?.lng?.toFixed(7),
        },
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });
    }
  }

  public ngOnDestroy() {
    this.markerService.cleanup();
  }
}
