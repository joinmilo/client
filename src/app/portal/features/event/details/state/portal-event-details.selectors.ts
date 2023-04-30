import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventCategoryEntity } from 'src/schema/schema';
import { portalEventDetailsStateKey } from '../constants/event-details.constant';
import { PortalEventDetailsState } from './portal-event-details.reducer';

export const selectPortalEventDetailsState = createFeatureSelector<PortalEventDetailsState>(portalEventDetailsStateKey);

export const selectSponsoredEvent = createSelector(
  selectPortalEventDetailsState,
  state => state.sponsoredEvent
);

export const selectEventDetails = createSelector(
  selectPortalEventDetailsState,
  state => state.eventDetails
);

export const selectOverviewDisplayType = createSelector(
  selectPortalEventDetailsState,
  state => state.overviewDisplayType
);

export const selectOverviewData = createSelector(
  selectPortalEventDetailsState,
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