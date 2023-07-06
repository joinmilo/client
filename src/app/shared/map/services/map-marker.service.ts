import { Injectable } from '@angular/core';
import {
  LeafletMouseEvent,
  Marker,
  divIcon,
  latLng,
  marker
} from 'leaflet';
import { DealEntity, EventEntity, Maybe, OrganisationEntity } from 'src/schema/schema';
import { defaultMarkerColor, iconOptions, markerColorOrganisations, markerIconOrganisations, popupOptions } from '../constants/map.constants';
import { MarkerDefinition, PointOfInterest } from '../typings/map';
import { MapComponentsService } from './map-components.service';

@Injectable({
  providedIn: 'root'
})
export class MapMarkerService {

  constructor(
    private componentService: MapComponentsService) { }

  public definitionsToMarkers(definitions?: MarkerDefinition[]): Marker[] {
    return (definitions?.map((definition) => this.definitionToMarker(definition)) || []).flat();
  }

  public definitionToMarker(definition: MarkerDefinition): Marker[] {
    switch (definition.entity) {
      case 'DealEntity':
        return this.dealsToMarkers(definition.data as DealEntity[]);
      case 'EventEntity':
        return this.eventsToMarkers(definition.data as EventEntity[]);
      case 'OrganisationEntity':
        return this.organisationsToMarkers(definition.data as OrganisationEntity[])
    }
  }

  public dealsToMarkers(entities: Maybe<DealEntity[]>): Marker[] {
    return (entities?.map(entity => this.dealToMarker(entity)) || []);
  }

  public dealToMarker(entity?: Maybe<DealEntity>): Marker {
    return this.createMarker({
      id: entity?.id as string,
      address: entity?.address,
      categoryTranslatableField: 'name',
      categoryTranslatables: entity?.category?.translatables,
      color: entity?.category?.color,
      date: entity?.created,
      icon: entity?.category?.icon,
      titleTranslatableField: 'name',
      textTranslatableField: 'shortDescription',
      translatables: entity?.translatables,
    });
  }

  public eventsToMarkers(entities: Maybe<EventEntity[]>): Marker[] {
    return (entities?.map(entity => this.eventToMarker(entity)) || []);
  }

  public eventToMarker(entity?: Maybe<EventEntity>): Marker {
    return this.createMarker({
      id: entity?.id as string,
      address: entity?.address,
      categoryTranslatableField: 'name',
      categoryTranslatables: entity?.category?.translatables,
      color: entity?.category?.color,
      date: entity?.schedule?.startDate,
      icon: entity?.category?.icon,
      titleTranslatableField: 'name',
      textTranslatableField: 'shortDescription',
      translatables: entity?.translatables,
    });
  }

  public organisationsToMarkers(entities: Maybe<OrganisationEntity[]>): Marker[] {
    return (entities?.map(entity => this.organistionToMarker(entity)) || []);
  }

  public organistionToMarker(entity?: Maybe<OrganisationEntity>): Marker {
    return this.createMarker({
      id: entity?.id as string,
      address: entity?.address,
      title: entity?.name,
      color: markerColorOrganisations,
      icon: markerIconOrganisations,
      textTranslatableField: 'description',
      translatables: entity?.translatables
    })
  }

  public createMarker(poi: PointOfInterest): Marker {
    const icon = divIcon({
      ...iconOptions,
      html: this.componentService.createMarkerElement(poi.color || defaultMarkerColor, poi.icon)
    });
    const popup = this.componentService.createPopupElement(poi);

    return marker(latLng(poi.address?.latitude || 0, poi.address?.longitude || 0), { icon })
      .bindPopup(popup, popupOptions)
      .on('click', event => event.target.openPopup())
      .on('mouseover', event => event.target.openPopup())
      .on('mouseout', event => {
        const target = event.target.getPopup()._container;
        target.matches(':hover')
          ? this.handleMouseOutPopup(target, event)
          : event.target.closePopup();
      })
  }

  public handleMouseOutPopup(container: HTMLElement, leaflet: LeafletMouseEvent): void {
    container.addEventListener('mouseout', () =>
      !container.matches(':hover') && leaflet.target.closePopup())
  }

  public cleanup(): void {
    this.componentService.cleanup();
  }

}

