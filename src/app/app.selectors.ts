// State Selectors
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router-serializer';
import { CoreState } from './index';
import { Episode } from '../generated/graphql';

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerState');
export const selectReviewsState = (state: CoreState) => state?.reviewsState;
export const selectAllReviews = (state: CoreState) => state?.reviewsState.reviews;
export const selectReviewsCount = (state: CoreState) => state?.reviewsState.reviews.length;
export const selectReviewsByEpisode = (episode: Episode) => createSelector(
    selectAllReviews,
    (reviews) => reviews.filter(review => review.episode === episode)
);


