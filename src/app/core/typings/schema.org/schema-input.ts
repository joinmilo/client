import { ArticleEntity, ContestEntity, DealEntity, EventEntity, Maybe, MenuItemEntity, OrganisationEntity, PageEntity, SurveyEntity, UserContextEntity } from 'src/app/core/api/generated/schema';

export type SchemaEntityInput = 'ArticleEntity'
  | 'DealEntity'
  | 'EventEntity'
  | 'MenuItemEntity'
  | 'OrganisationEntity'
  | 'PageEntity'
  | 'UserContextEntity';

export type SchemaDataInput = Maybe<ArticleEntity
  | ContestEntity
  | DealEntity
  | EventEntity
  | MenuItemEntity
  | OrganisationEntity
  | PageEntity
  | SurveyEntity
  | UserContextEntity
  | undefined
>;
