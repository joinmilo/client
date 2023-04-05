import { createReducer, on } from '@ngrx/store';
import { AppEntity, ArticleEntity, EventEntity, Maybe, MenuItemEntity, OrganisationEntity, SocialMediaEntity } from 'src/schema/schema';
import { ContestEntity, DealEntity, SearchDto, SurveyEntity, UserContextEntity } from './../../../../schema/schema';
import { CommonActions } from './common.actions';

export interface CommonState {
  apps?: Maybe<AppEntity[]>,
  menu?: Maybe<MenuItemEntity[]>,
  socialMedia?: Maybe<SocialMediaEntity[]>,
  searchResult?: Maybe<SearchDto[]>,
  searchQuery?: Maybe<string>,
  events?: Maybe<EventEntity[]>,
  articles?: Maybe<ArticleEntity[]>,
  organisations?: Maybe<OrganisationEntity[]>,
  authors?: Maybe<UserContextEntity[]>,
  deals?: Maybe<DealEntity[]>,
  surveys?: Maybe<SurveyEntity[]>,
  contests?: Maybe<ContestEntity[]>
}

export const initialState: CommonState = {
};

export const commonReducer = createReducer(
  initialState,

  on(CommonActions.setApps, (state, action): CommonState => (
    { ...state, apps: action.apps }
  )),

  on(CommonActions.setMenu, (state, action): CommonState => (
    { ...state, menu: action.menuItems }
  )),

  on(CommonActions.setSocialMedia, (state, action): CommonState => (
    { ...state, socialMedia: action.socialMedia }
  )),

  on(CommonActions.setSearchResult, (state, action): CommonState => (
    { ...state, searchResult: action.searchResult }
  )),

  on(CommonActions.searchQuerySet, (state, action): CommonState => (
    { ...state, searchQuery: action.query }
  )),

  on(CommonActions.setFoundEvents, (state, action): CommonState => (
    { ...state, events: action.events }
  )),

  on(CommonActions.setFoundArticles, (state, action): CommonState => (
    { ...state, articles: action.articles }
  )),

  on(CommonActions.setFoundOrganisations, (state, action): CommonState => (
    { ...state, organisations: action.organisations }
  )),

  on(CommonActions.setFoundAuthors, (state, action): CommonState => (
    { ...state, authors: action.authors }
  )),

  on(CommonActions.setFoundDeals, (state, action): CommonState => (
    { ...state, deals: action.deals }
  )),

  on(CommonActions.setFoundSurveys, (state, action): CommonState => (
    { ...state, surveys: action.surveys }
  )),

  on(CommonActions.setFoundContests, (state, action): CommonState => (
    { ...state, contests: action.contests }
  )),
);
