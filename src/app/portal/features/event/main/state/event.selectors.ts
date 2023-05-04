import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventCategoryEntity } from 'src/schema/schema';
import { eventStateKey } from '../constants/event.constant';
import { EventState } from './event.reducer';

export const selectEventState = createFeatureSelector<EventState>(eventStateKey);

export const selectSponsoredEvent = createSelector(
  selectEventState,
  state => state.sponsoredEvent
);

export const selectEventDetails = createSelector(
  selectEventState,
  state => state.eventDetails
);

export const selectOverviewDisplayType = createSelector(
  selectEventState,
  state => state.overviewDisplayType
);

export const selectOverviewData = createSelector(
  selectEventState,
  state => state.overviewData
);

export const selectOverviewDataCategories = createSelector(
  selectOverviewData,
  events => {
    return events?.reduce((result, current) => {
      const existing = result.find(category => category.id === current.category?.id);
      
      existing
        ? existing.events?.push(current)
        : result.push({ ...current.category, events: [current] } as EventCategoryEntity);

      return result;
    }, [] as EventCategoryEntity[]);
  }
);

export const selectEventsComments = createSelector(
  selectEventState,
  state => state.EventComments  
)