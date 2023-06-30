import {
  DivIconOptions, LatLngBoundsLiteral,
  LatLngExpression,
  MapOptions,
  MarkerClusterGroupOptions,
  PopupOptions
} from 'leaflet';

export const mapFeatureKey = 'mapState';

export enum FilterKey {
  // NOTE: Values used in URLs, changes might break links
  events = 1,
  organisations = 2,
  deals = 3
}

export enum MapQueryParams {
  // NOTE: Values used in URLs, changes might break links
  filter = "filter",
  southWestLat = "sw1",
  southWestLng = "sw2",
  northEastLat = "ne1",
  northEastLng = "ne2",
}

export const defaultBounds = [[51.246938, 7.121244], [51.273150, 7.186175]] as LatLngBoundsLiteral;
export const defaultCenter = [51.256214, 7.150764] as LatLngExpression;

export const defaultMarkerColor = '#54A6CB';

export const markerColorOrganisations = defaultMarkerColor;
export const markerIconOrganisations = 'people-group';

export const mapOptions: MapOptions = {
  zoom: 14,
  center: defaultCenter,
  zoomControl: false,
  attributionControl: false,
};

export const tileLayerURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

export const tileLayerOptions = {
  opacity: 0.7,  // TODO: Adjust when adding final map
  minZoom: 8,
  maxZoom: 19,
  detectRetina: true,
}

export const markerClusterOptions: MarkerClusterGroupOptions = {
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true,
  spiderLegPolylineOptions: {
    weight: 2,
    color: defaultMarkerColor,
    opacity: 0.8
  }
};

export const iconOptions: DivIconOptions = {
  className: 'marker',
  iconSize: [28, 40],
  popupAnchor: [0, 20]
}

export const popupOptions: PopupOptions = {
  closeButton: true,
  offset: [0, -24],
}
