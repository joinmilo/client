import {DealEntity, EventEntity, Maybe, OrganisationEntity} from 'src/schema/schema';
import {Translatable} from 'src/app/core/typings/translatable';

export type PoiEntity =  'DealEntity'
  | 'EventEntity'
  | 'OrganisationEntity';

export type PoiData = Maybe<DealEntity>
  | Maybe<EventEntity>
  | Maybe<OrganisationEntity>
  | undefined;

export type PointOfInterest = {
  latitude: number,
  longitude: number

  icon?: Maybe<string>,
  color?: Maybe<string>,

  category?: Maybe<string>,
  categoryTranslatables?: Maybe<Maybe<Translatable>[]>,
  categoryTranslatableField?: Maybe<string>,

  date?: Maybe<string>,

  text?: Maybe<string>,
  textTranslatableField?: Maybe<string>,

  title?: Maybe<string>,
  titleTranslatableField?: Maybe<string>,

  translatables?: Maybe<Maybe<Translatable>[]>,
}
