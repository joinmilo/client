import { CardData, CardElement, CardEntity } from 'src/app/shared/card/typings/card';
import { ArticleEntity, ContestEntity, DealEntity, EventEntity, Maybe, OrganisationEntity, SurveyEntity, UserContextEntity } from "src/schema/schema";
import { articlesFeatureKey, authorsFeatureKey, contestsFeatureKey, dealsFeatureKey, eventsFeatureKey, organisationsFeatureKey, surveysFeatureKey } from '../../../core/constants/core.constants';

export const dataToElement = (entity: CardEntity, data: CardData): CardElement | undefined => {
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
  category: entity?.category?.name,
  creatorImage: entity?.author?.titleImage,
  creator: entity?.publicAuthor?.name ?? entity?.author?.user?.firstName,
  date: entity?.created,
  dateTime: false,
  image: entity?.cardImage,
  text: entity?.shortDescription,
  title: entity?.name,
  url: ['/portal', articlesFeatureKey, entity?.slug],
});

export const contestsToCards = (entities?: Maybe<ContestEntity[]>): CardElement[] | undefined => 
  entities?.map(entity => contestToCard(entity));

export const contestToCard = (entity: Maybe<ContestEntity>): CardElement => ({
  id: entity?.id,
  image: entity?.cardImage,
  date: entity?.dueDate,
  dateTime: true,
  text: entity?.shortDescription,
  title: entity?.name,
  url: ['/portal', contestsFeatureKey, entity?.slug],
});

export const dealsToCards = (entities?: Maybe<DealEntity[]>): CardElement[] => {
  return entities?.map(entity => dealToCard(entity)) as CardElement[];
};

export const dealToCard = (entity: Maybe<DealEntity>): CardElement => ({
  id: entity?.id,
  creator: entity?.contact?.name,
  creatorImage: entity?.creator?.titleImage,
  date: entity?.created,
  dateTime: true,
  image: entity?.cardImage,
  text: entity?.shortDescription,
  title: entity?.name,
  url: ['/portal', dealsFeatureKey, entity?.slug],
});

export const eventsToCards = (entities?: Maybe<Maybe<EventEntity>[]>): CardElement[] | undefined =>
  entities?.map(entity => eventToCard(entity));

export const eventToCard = (entity?: Maybe<EventEntity>): CardElement => ({
  id: entity?.id,
  address: entity?.address,
  category: entity?.category?.name,
  creator: entity?.contact?.name,
  creatorImage: entity?.creator?.titleImage,
  date: entity?.schedule?.startDate,
  dateTime: true,
  image: entity?.cardImage,
  text: entity?.shortDescription,
  title: entity?.name,
  url: ['/portal', eventsFeatureKey, entity?.slug],
});

export const organisationsToCards = (entities?: Maybe<OrganisationEntity[]>): CardElement[] | undefined =>
  entities?.map(entity => organisationToCard(entity));

export const organisationToCard = (entity?: Maybe<OrganisationEntity>): CardElement => ({
  id: entity?.id,
  creator: entity?.name,
  creatorImage: entity?.avatar,
  dateTime: true,
  email: entity?.contact?.email,
  url: ['/portal', organisationsFeatureKey, entity?.slug],
});

export const surveysToCards = (entities?: Maybe<SurveyEntity[]>): CardElement[] | undefined => 
  entities?.map(entity => surveyToCard(entity));

export const surveyToCard = (entity: Maybe<SurveyEntity>): CardElement => ({
  id: entity?.id,
  date: entity?.dueDate,
  dateTime: true,
  image: entity?.cardImage,
  text: entity?.description,
  title: entity?.name,
  url: ['/portal', surveysFeatureKey, entity?.slug],
});

export const usersToCards = (entities?: Maybe<UserContextEntity[]>): CardElement[] | undefined => 
  entities?.map(entity => userToCard(entity));

export const userToCard = (entity?: Maybe<UserContextEntity>): CardElement => ({
  id: entity?.id,
  email: entity?.user?.email,
  creator: entity?.user?.lastName,
  creatorImage: entity?.avatar,
  dateTime: true,
  url: ['/portal', authorsFeatureKey, entity?.slug],
});