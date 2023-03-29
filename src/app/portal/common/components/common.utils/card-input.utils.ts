import { CardInput } from "src/app/core/typings/card";
import { ArticleEntity, ContestEntity, DealEntity, EventEntity, Maybe, OrganisationEntity, SurveyEntity, UserContextEntity } from "src/schema/schema";

export const transformEventsToCards = (events?: Maybe<EventEntity>[]): CardInput[] => {
  return events?.map(event => ({
    address: event?.address,
    categoryTranslatables: event?.category?.translatables,
    categoryTranslatableField: 'name',
    creator: event?.contact?.name,
    creatorImage: event?.creator?.titleImage,
    date: event?.schedule?.startDate,
    dateTime: true,
    image: event?.cardImage,
    textTranslatableField: 'shortDescription',
    titleTranslatableField: 'name',
    translatables: event?.translatables,
  })) as CardInput[];
}

export const transformArticlesToCards = (articles?: Maybe<ArticleEntity[]>): CardInput[] => {
  return articles?.map(article => ({
    categoryTranslatables: article.category?.translatables,
    categoryTranslatableField: 'name',
    date: article.created,
    dateTime: false,
    creator: article.publicAuthor ?? article.author?.user?.firstName,
    creatorImage: article.author?.titleImage,
    image: article.cardImage,
    textTranslatableField: 'shortDescription',
    titleTranslatableField: 'title',
    translatables: article.translatables,
  })) as CardInput[];
}

export const transformOrganisationsToCards = (organisations?: Maybe<OrganisationEntity[]>): CardInput[] => {
  return organisations?.map(organisation => ({
    contact: organisation.contact,
    email: organisation.contact?.email,
    creator: organisation.name,
    creatorImage: organisation.avatar,
    dateTime: true,
    translatables: organisation.translatables,
  })) as CardInput[];
}

export const transformAuthorsToCards = (authors?: Maybe<UserContextEntity[]>): CardInput[] => {
  return authors?.map(author => ({
    email: author.user?.email,
    creator: author.user?.lastName,
    creatorImage: author.avatar,
    dateTime: true,
  })) as CardInput[];
}

export const transformDealsToCards = (deals?: Maybe<DealEntity[]>): CardInput[] => {
  return deals?.map(deal => ({
    creator: deal.contact?.name,
    date: deal.created,
    creatorImage: deal.creator?.titleImage,
    image: deal.cardImage,
    textTranslatableField: 'shortDescription',
    translatables: deal.translatables,
    titleTranslatableField: 'name',
  })) as CardInput[];
}

export const transformContestsToCards = (contests?: Maybe<ContestEntity[]>): CardInput[] => {
  return contests?.map(contest => ({
    image: contest.cardImage,
    date: contest.dueDate,
    translatables: contest.translatables,
    textTranslatableField: 'shortDescription',
    titleTranslatableField: 'name',
  })) as CardInput[];
}

export const transformSurveysToCards = (surveys?: Maybe<SurveyEntity[]>): CardInput[] => {
  return surveys?.map(survey => ({
    date: survey.due_date,
    image: survey.cardImage,
    translatables: survey.translatables,
    textTranslatableField: 'description',
    titleTranslatableField: 'name',
  })) as CardInput[];
}