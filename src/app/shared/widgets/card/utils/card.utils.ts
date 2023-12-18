import { ArticleEntity, ContestEntity, DealEntity, EventEntity, Maybe, OrganisationEntity, SurveyEntity, UserContextEntity } from 'src/app/core/api/generated/schema';
import { articlesFeatureKey, authorsFeatureKey, contestsFeatureKey, dealsFeatureKey, eventsFeatureKey, organisationsFeatureKey, surveysFeatureKey } from 'src/app/core/constants/feature.constants';
import { ContentData, ContentEntity } from 'src/app/core/typings/content-entity';
import { CardElement } from 'src/app/shared/widgets/card/typings/card';

export const dataToElement = (entity: ContentEntity, data: ContentData): CardElement | undefined => {
  switch(entity) {
    case 'ArticleEntity':
      return articleToCard(data as ArticleEntity);
    case 'ContestEntity':
      return contestToCard(data as ContestEntity);
    case 'DealEntity':
      return dealToCard(data as DealEntity);
    case 'EventEntity':
      return eventToCard(data as EventEntity);
    case 'OrganisationEntity':
      return organisationToCard(data as OrganisationEntity);
    case 'SurveyEntity': 
      return surveyToCard(data as SurveyEntity);
    case 'UserContextEntity': 
      return userToCard(data as UserContextEntity);
  }
}

export const articlesToCards = (entities?: Maybe<ArticleEntity[]>): CardElement[] | undefined =>
  entities?.map(entity => articleToCard(entity));

export const articleToCard = (entity?: Maybe<ArticleEntity>): CardElement => ({
  id: entity?.id,
  category: entity?.category,
  date: entity?.created,
  dateTime: false,
  creator: entity?.publicAuthor?.name ??
    (entity?.author?.user?.firstName || entity?.author?.user?.lastName
      ? `${entity?.author?.user?.firstName} ${entity?.author?.user?.lastName}`
      : ''),
  creatorImage: entity?.author?.uploads?.find(upload => upload?.profilePicture)?.media,
  url: ['/portal', articlesFeatureKey, entity?.slug],
  image: entity?.uploads?.find(upload => upload?.card)?.media,
  textTranslatableField: 'shortDescription',
  titleTranslatableField: 'name',
  translatables: entity?.translatables,
  avatarPlaceholder: (entity?.author?.user?.firstName?.charAt(0) || entity?.author?.user?.lastName?.charAt(0)) ?? entity?.publicAuthor?.name?.charAt(0),
});

export const contestsToCards = (entities?: Maybe<ContestEntity[]>): CardElement[] | undefined => 
  entities?.map(entity => contestToCard(entity));

export const contestToCard = (entity: Maybe<ContestEntity>): CardElement => ({
  id: entity?.id,
  image: entity?.uploads?.find(upload => upload?.card)?.media,
  date: entity?.participationEndDate,
  dateTime: true,
  url: ['/portal', contestsFeatureKey, entity?.slug],
  translatables: entity?.translatables,
  textTranslatableField: 'shortDescription',
  titleTranslatableField: 'name',
});

export const dealsToCards = (entities?: Maybe<DealEntity[]>): CardElement[] => {
  return entities?.map(entity => dealToCard(entity)) as CardElement[];
};

export const dealToCard = (entity: Maybe<DealEntity>): CardElement => ({
  id: entity?.id,
  address: entity?.address,
  category: entity?.category,
  creator: `${entity?.creator?.user?.firstName} ${entity?.creator?.user?.lastName}`,
  date: entity?.created,
  dateTime: true,
  creatorImage: entity?.creator?.uploads?.find(upload => upload?.profilePicture)?.media,
  image: entity?.uploads?.find(upload => upload?.card)?.media,
  url: ['/portal', dealsFeatureKey, entity?.slug],
  textTranslatableField: 'shortDescription',
  translatables: entity?.translatables,
  titleTranslatableField: 'name',
});

export const eventsToCards = (entities?: Maybe<Maybe<EventEntity>[]>): CardElement[] | undefined =>
  entities?.map(entity => eventToCard(entity));

export const eventToCard = (entity?: Maybe<EventEntity>): CardElement => ({
  id: entity?.id,
  address: entity?.address,
  category: entity?.category,
  creator: entity?.organisation?.name ?? entity?.contact?.name,
  creatorImage: entity?.organisation?.uploads?.find(upload => upload?.card)?.media || entity?.creator?.uploads?.find(upload => upload?.profilePicture)?.media,
  date: entity?.schedule?.startDate,
  dateTime: true,
  image: entity?.uploads?.find(upload => upload?.card)?.media,
  url: ['/portal', eventsFeatureKey, entity?.slug],
  textTranslatableField: 'shortDescription',
  titleTranslatableField: 'name',
  translatables: entity?.translatables,
});

export const organisationsToCards = (entities?: Maybe<OrganisationEntity[]>): CardElement[] | undefined =>
  entities?.map(entity => organisationToCard(entity));

export const organisationToCard = (entity?: Maybe<OrganisationEntity>): CardElement => ({
  id: entity?.id,
  creator: entity?.name, 
  title: entity?.name,
  address: entity?.address,
  dateTime: true,
  email: entity?.contact?.email,
  image: entity?.uploads?.find(upload => upload?.card)?.media,
  phone: entity?.contact?.phone,
  textTranslatableField: 'description',
  titleTranslatableField: 'name',
  translatables: entity?.translatables,
  url: ['/portal', organisationsFeatureKey, entity?.slug],
  avatarPlaceholder: entity?.name?.charAt(0) 
});

export const surveysToCards = (entities?: Maybe<SurveyEntity[]>): CardElement[] | undefined => 
  entities?.map(entity => surveyToCard(entity));

export const surveyToCard = (entity: Maybe<SurveyEntity>): CardElement => ({
  id: entity?.id,
  date: entity?.dueDate,
  dateTime: true,
  image: entity?.uploads?.find(upload => upload?.card)?.media,
  url: ['/portal', surveysFeatureKey, entity?.slug],
  translatables: entity?.translatables,
  title: entity?.name,
  textTranslatableField: 'description',
  titleTranslatableField: 'name',
});

export const usersToCards = (entities?: Maybe<UserContextEntity[]>): CardElement[] | undefined => 
  entities?.map(entity => userToCard(entity));

export const userToCard = (entity?: Maybe<UserContextEntity>): CardElement => ({
  id: entity?.id,
  email: entity?.user?.email,
  creator: `${entity?.user?.firstName} ${entity?.user?.lastName}`,
  creatorImage: entity?.uploads?.find(upload => upload?.profilePicture)?.media,
  image: entity?.uploads?.find(upload => upload?.profilePicture)?.media,  
  dateTime: true,
  phone: entity?.user?.phone,
  avatarPlaceholder: entity?.user?.firstName?.charAt(0) || entity?.user?.lastName?.charAt(0),
  url: entity?.slug
    ? ['/portal', authorsFeatureKey, entity.slug]
    : undefined,
});