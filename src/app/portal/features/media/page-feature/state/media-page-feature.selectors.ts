import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MediaPageFeatureState } from './media-page-feature.reducer';
import { mediaPageFeatureStateKey } from '../constants/media-page-feature.constants';
import { Maybe, MediaEntity } from 'src/schema/schema';

export const selectMediaPageFeatureState = createFeatureSelector<MediaPageFeatureState>(mediaPageFeatureStateKey);

export const selectRecentMedia = createSelector(
  selectMediaPageFeatureState,
  state => state.recentMedia?.map(infoMedia => infoMedia?.media!)
);
