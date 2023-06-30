import {
  DivIconOptions, LatLngBoundsLiteral,
  MarkerClusterGroupOptions,
  PopupOptions
} from 'leaflet';

export const defaultBounds = [[51.246938, 7.121244], [51.273150, 7.186175]] as LatLngBoundsLiteral;

export const defaultMarkerColor = 'var(--color-default-map-marker)';

export const markerColorOrganisations = defaultMarkerColor;
export const markerIconOrganisations = 'people-group';

export const tileLayerOptions = {
  opacity: 0.7,  // TODO: Adjust when adding final map
  minZoom: 8,
  maxZoom: 19,
  detectRetina: true,
};

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
