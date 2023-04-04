import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardInput } from 'src/app/core/typings/card';
import { eventPageFeatureStateKey } from '../constants/event-page-feature.constant';
import { EventPageFeatureState } from './event.reducer';

export const selectEventPageFeatureState = createFeatureSelector<EventPageFeatureState>(eventPageFeatureStateKey);

export const selectRecentEvents = createSelector(
  selectEventPageFeatureState,
  state => state.recentEvents
);

export const selectRecentEventsCards = createSelector(
  selectRecentEvents,
  recentEvents => recentEvents?.map(event => ({
    address: event.address,
    categoryTranslatables: event.category?.translatables,
    categoryTranslatableField: 'name',
    creator: event.contact?.name,
    creatorImage: event.creator?.titleImage,
    date: event.schedules
      ?.filter(a => new Date(a?.startDate).toLocaleDateString() > Date.now().toLocaleString()
       || new Date(a?.endDate).toLocaleDateString() > Date.now().toLocaleString())
      ?.sort((a, b) => b?.startDate.localeCompare(a?.startDate))
      ?.shift()?.startDate,
    dateTime: true,
    image: event.cardImage,
    textTranslatableField: 'shortDescription',
    titleTranslatableField: 'name',
    translatables: event.translatables,
  })) as CardInput[]
);