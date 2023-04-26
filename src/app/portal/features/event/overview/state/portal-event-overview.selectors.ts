import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventCategoryEntity } from 'src/schema/schema';
import { portalEventOverviewStateKey } from '../constants/portal-event-overview.constant';
import { PortalEventOverviewState } from './portal-event-overview.reducer';

export const selectEventState = createFeatureSelector<PortalEventOverviewState>(portalEventOverviewStateKey);

export const selectSponsoredEvent = createSelector(
  selectEventState,
  state => state.sponsoredEvent
);

export const selectDisplayType = createSelector(
  selectEventState,
  state => state.displayType
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

export const selectTableData = createSelector(
  selectEventState,
  state => state.tableData
);

export const selectTableParams = createSelector(
  selectEventState,
  state => state.tableParams
);