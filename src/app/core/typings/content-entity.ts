import { ArticleEntity, ContestEntity, DealEntity, EventEntity, Maybe, OrganisationEntity, SurveyEntity, UserContextEntity } from 'src/app/core/api/generated/schema';

export type ContentEntity = 'ArticleEntity'
  | 'ContestEntity'
  | 'DealEntity'
  | 'EventEntity'
  | 'OrganisationEntity'
  | 'SurveyEntity'
  | 'UserContextEntity';

export type ContentData = Maybe<ArticleEntity>
  | Maybe<ContestEntity>
  | Maybe<DealEntity>
  | Maybe<EventEntity>
  | Maybe<OrganisationEntity>
  | Maybe<SurveyEntity>
  | Maybe<UserContextEntity>
  | undefined;