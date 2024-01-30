import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventCategoryEntity } from 'src/app/core/api/generated/schema';
import { distinctStartDates } from 'src/app/core/utils/schedule.utils';
import { MarkerDefinition } from 'src/app/shared/widgets/map/typings/map';
import { portalEventOverviewStateKey } from '../constants/portal-event-overview.constants';
import { PortalEventOverviewState } from './portal-event-overview.reducer';

export const selectPortalEventOverviewState = createFeatureSelector<PortalEventOverviewState>(portalEventOverviewStateKey);

export const selectSponsoredEvent = createSelector(
  selectPortalEventOverviewState,
  state => state.sponsoredEvent
);

export const selectOverviewData = createSelector(
  selectPortalEventOverviewState,
  state => state.overviewData
);

export const selectOverviewDataCategories = createSelector(
  selectOverviewData,
  events => {
    return events?.result?.reduce((result, current) => {
      const existing = result.find(category => category.id === current?.category?.id);
      
      existing
        ? existing.events?.push(current)
        : result.push({ ...current?.category, events: [current] } as EventCategoryEntity);

      return result;
    }, [] as EventCategoryEntity[]).reverse();
  }
);

export const selectOverviewDataMarkers = createSelector(
  selectOverviewData,
  deals => ({
    data: deals?.result,
    entity: 'EventEntity'
  } as MarkerDefinition
  )
);

export const selectParams = createSelector(
  selectPortalEventOverviewState,
  state => state.params
);

export const selectRawParams = createSelector(
  selectPortalEventOverviewState,
  state => state.rawFilterParams
);

export const selectSchedules = createSelector(
  selectPortalEventOverviewState,
  state => state.schedules
);

export const selectDistinctSchedules = createSelector(
  selectSchedules,
  schedules => distinctStartDates(schedules)
);