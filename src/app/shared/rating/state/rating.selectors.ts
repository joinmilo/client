import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ratingStateKey } from '../rating.constant';
import { RatingState } from './rating.reducer';

export const selectRatingState = createFeatureSelector<RatingState>(ratingStateKey);

export const selectEventRating = createSelector(
  selectRatingState,
  state => state.saveEventRating
);