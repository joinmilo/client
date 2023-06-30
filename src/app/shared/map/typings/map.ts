import { Translatable } from 'src/app/core/typings/translatable';
import { AddressEntity, DealEntity, EventEntity, Maybe, OrganisationEntity } from 'src/schema/schema';

export type MapEntity = 'DealEntity'
  | 'EventEntity'
  | 'OrganisationEntity';

export type MapData = Maybe<DealEntity>
  | Maybe<EventEntity>
  | Maybe<OrganisationEntity>
  | undefined;

export type MarkerDefinition = {
  entity: MapEntity,
  data?: MapData[]
};

export type PointOfInterest = {
  address?: Maybe<AddressEntity>,

  category?: Maybe<string>,
  categoryTranslatables?: Maybe<Maybe<Translatable>[]>,
  categoryTranslatableField?: Maybe<string>,
  
  color?: Maybe<string>,
  icon?: Maybe<string>,
  date?: Maybe<string>,

  text?: Maybe<string>,
  textTranslatableField?: Maybe<string>,

  title?: Maybe<string>,
  titleTranslatableField?: Maybe<string>,

  translatables?: Maybe<Maybe<Translatable>[]>,
};
