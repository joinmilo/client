import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardInput } from 'src/app/core/typings/card';
import { eventPageFeatureStateKey } from '../constants/event-page-feature.constant';
import { EventPageFeatureState } from './event.reducer';

export const selectEventPageFeatureState = createFeatureSelector<EventPageFeatureState>(eventPageFeatureStateKey);

export const selectRecentEvents = createSelector(
  selectEventPageFeatureState,
  state => state.recentEvents
);

//TODO
export const selectRecentEventsCards = createSelector(
  selectRecentEvents,
  recentEvents => recentEvents?.map(event => ({
    address: event.address,
    categoryTranslatables: event.category?.translatables,
    categoryTranslatableField: 'name',
    creator: event.contact?.name,
    creatorImage: event.creator?.titleImage,
    date: event?.schedule?.startDate,
    dateTime: true,
    image: event.cardImage,
    textTranslatableField: 'shortDescription',
    titleTranslatableField: 'name',
    translatables: event.translatables,
  })) as CardInput[]
);