import { ArticleEntity, ContestEntity, DealEntity, EventEntity, Maybe, MenuItemEntity, OrganisationEntity, PageEntity, PageableList_ArticleEntity, PageableList_DealEntity, PageableList_EventEntity, PageableList_OrganisationEntity, PageableList_PageEntity, PageableList_UserContextEntity, SurveyEntity, UserContextEntity } from 'src/app/core/api/generated/schema';

export type SchemaEntity = 'ArticleEntity'
  | 'DealEntity'
  | 'EventEntity'
  | 'MenuItemEntity'
  | 'OrganisationEntity'
  | 'PageEntity'
  | 'UserContextEntity';

export type SchemaEntityArray = 'PageableList_ArticleEntity'
  | 'PageableList_DealEntity'
  | 'PageableList_EventEntity'
  | 'PageableList_OrganisationEntity'
  | 'PageableList_PageEntity'
  | 'PageableList_UserContextEntity'

export type SchemaData = Maybe<ArticleEntity
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

export type SchemaDataArray = SchemaData[];

export type SchemaOverview = Maybe<PageableList_ArticleEntity
    | PageableList_DealEntity
    | PageableList_EventEntity
    | PageableList_OrganisationEntity
    | PageableList_PageEntity
    | PageableList_UserContextEntity
    | undefined
  >;
