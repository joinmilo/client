import { DealEntity, EventEntity, Maybe, OrganisationEntity } from "src/schema/schema";
import {PoiData, PoiEntity, PointOfInterest} from '../typings/point-of-interest';
import {markerColorOrganisations, markerIconOrganisations} from '../constants/map.constants';

export const dataToPoi = (entity: PoiEntity, data: PoiData): Maybe<PointOfInterest> => {
  switch (entity) {
    case 'DealEntity':
      return dealToPoi(data as DealEntity);
    case 'EventEntity':
      return eventToPoi(data as EventEntity);
    case 'OrganisationEntity':
      return organistionToPoi(data as OrganisationEntity)
  }
};

export const dealsToPois = (entities: Maybe<DealEntity[]>): PointOfInterest[] =>
  (entities?.map(dealToPoi).filter(Boolean) || []) as PointOfInterest[];

export const eventsToPois = (entities: Maybe<EventEntity[]>): PointOfInterest[] =>
  (entities?.map(eventToPoi).filter(Boolean) || []) as PointOfInterest[];

export const organisationsToPois = (entities: Maybe<OrganisationEntity[]>): PointOfInterest[] =>
  (entities?.map(organistionToPoi).filter(Boolean) || []) as PointOfInterest[];

export const eventToPoi = (entity?: Maybe<EventEntity>): Maybe<PointOfInterest> =>
  withLatitudeAndLongitudeOnly(entity, {
    categoryTranslatableField: 'name',
    categoryTranslatables: entity?.category?.translatables,
    color: entity?.category?.color,
    date: entity?.schedule?.startDate,
    icon: entity?.category?.icon,
    titleTranslatableField: 'name',
    textTranslatableField: 'shortDescription',
    translatables: entity?.translatables,
  });

export const organistionToPoi = (entity?: Maybe<OrganisationEntity>): Maybe<PointOfInterest> =>
  withLatitudeAndLongitudeOnly(entity, {
    title: entity?.name,
    color: markerColorOrganisations,
    icon: markerIconOrganisations,
    textTranslatableField: 'description',
    translatables: entity?.translatables
  });

export const dealToPoi = (entity?: Maybe<DealEntity>): Maybe<PointOfInterest> =>
  withLatitudeAndLongitudeOnly(entity, {
    categoryTranslatableField: 'name',
    categoryTranslatables: entity?.category?.translatables,
    color: entity?.category?.color,
    date: entity?.created,
    icon: entity?.category?.icon,
    titleTranslatableField: 'name',
    textTranslatableField: 'shortDescription',
    translatables: entity?.translatables,
  });

const withLatitudeAndLongitudeOnly = (
  data: PoiData,
  values: Omit<PointOfInterest, 'latitude' | 'longitude'>
): Maybe<PointOfInterest> =>
  (data?.address?.latitude && data?.address?.longitude)
  ? {
    latitude: data.address.latitude,
    longitude: data.address.longitude,
    ...values
  }
  : null;
