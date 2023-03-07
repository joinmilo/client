import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardInput } from 'src/app/core/typings/card';
import { pageFeatureKey } from '../constants/page.constants';
import { PageState } from './page.reducer';

export const selectPageState = createFeatureSelector<PageState>(pageFeatureKey);

export const selectCurrentPage = createSelector(
  selectPageState,
  state => state.page
);

export const selectRecentArticles = createSelector(
  selectPageState,
  state => state.recentArticles
);

export const selectRecentEvents = createSelector(
  selectPageState,
  state => state.recentEvents?.map(event => ({
    address: event.address,
    categoryTranslatables: event.category?.translatables,
    categoryTranslatableField: 'name',
    creator: event.contact?.name,
    creatorImage: event.creator?.titleImage,
    date: event.schedules?.filter(a => a?.startDate).sort((a, b) => Math.abs(Date.now() - a?.startDate) - Math.abs(Date.now() - b?.startDate)).shift(),
    dateTime: true,
    image: event.titleImage,
    textTranslatableField: 'description',
    titleTranslatableField: 'name',
    translatables: event.translatables,
  })) as CardInput[]
);
