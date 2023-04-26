import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventCategoryEntity } from 'src/schema/schema';
import { portalEventOverviewStateKey } from '../constants/portal-event-overview.constant';
import { PortalEventOverviewState } from './portal-event-overview.reducer';

export const selectPortalEventOverviewState = createFeatureSelector<PortalEventOverviewState>(portalEventOverviewStateKey);

export const selectSponsoredEvent = createSelector(
  selectPortalEventOverviewState,
  state => state.sponsoredEvent
);

export const selectDisplayType = createSelector(
  selectPortalEventOverviewState,
  state => state.displayType
);

export const selectOverviewData = createSelector(
  selectPortalEventOverviewState,
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

export const selectTableData = createSelector(
  selectPortalEventOverviewState,
  state => state.tableData
);

export const selectTableParams = createSelector(
  selectPortalEventOverviewState,
  state => state.tableParams
);