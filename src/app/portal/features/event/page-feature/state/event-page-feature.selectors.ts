import { createFeatureSelector, createSelector } from '@ngrx/store';
import { transformEventsToCards } from 'src/app/core/utils/card.utils';
import { eventPageFeatureStateKey } from '../constants/event-page-feature.constant';
import { EventPageFeatureState } from './event-page-feature.reducer';

export const selectEventPageFeatureState = createFeatureSelector<EventPageFeatureState>(eventPageFeatureStateKey);

export const selectRecentEvents = createSelector(
  selectEventPageFeatureState,
  state => state.recentEvents
);

export const selectRecentEventsCards = createSelector(
  selectRecentEvents,
  recentEvents => transformEventsToCards(recentEvents)
);