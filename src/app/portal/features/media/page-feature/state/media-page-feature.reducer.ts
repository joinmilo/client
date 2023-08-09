import { createReducer, on } from '@ngrx/store';
import { InfoMediaEntity, Maybe } from 'src/schema/schema';
import { MediaPageFeatureActions } from './media-page-feature.actions';

export interface MediaPageFeatureState {
  recentMedia?: Maybe<InfoMediaEntity[]>,
}

export const initialState: MediaPageFeatureState = { };

export const mediaPageFeatureReducer = createReducer(
  initialState,

  on(MediaPageFeatureActions.setRecentMedia, (state, action): MediaPageFeatureState => (
    { ...state, recentMedia: action.media }
  )),
);
