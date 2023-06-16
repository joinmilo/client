import { createReducer, on } from '@ngrx/store';
import { DealEntity, Maybe } from 'src/schema/schema';
import { DealPageFeatureActions } from './deal-page-feature.actions';

export interface DealPageFeatureState {
  recentDeals?: Maybe<DealEntity[]>,
}

export const initialState: DealPageFeatureState = { };

export const dealPageFeatureReducer = createReducer(
  initialState,

  on(DealPageFeatureActions.setRecentDeals, (state, action): DealPageFeatureState => (
    { ...state, recentDeals: action.deals }
  )),
);
