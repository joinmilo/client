import { createReducer, on } from '@ngrx/store';
import { EventRatingEntity, Maybe } from 'src/schema/schema';
import { RatingActions } from './rating.actions';

export interface RatingState {
  saveEventRating?: Maybe<EventRatingEntity>;
}

export const initialState: RatingState = {};

export const ratingReducer = createReducer(
  initialState,

  on(RatingActions.eventRatingSaved, (state, action): RatingState => (
    { ...state, saveEventRating: action.entity }
  )),
);
