import { ReviewsActions, ReviewsActionTypes } from '../actions/reviews.actions';
import { Maybe, Review } from '../../../generated/graphql';

export interface ReviewsState {
    error: Error | undefined;
    reviews: Array<Maybe<{ __typename?: 'Review' } & Pick<Review, 'episode' | 'commentary' | 'stars'>>>;
}

// Default data / initial state
export const defaultState: ReviewsState = {
    error: undefined,
    reviews: [],
};


export function reviewsReducer(state: ReviewsState = defaultState, action: ReviewsActions): ReviewsState {
    switch (action.type) {
        case ReviewsActionTypes.FETCH_FAIL:
        case ReviewsActionTypes.CREATE_FAIL:
        case ReviewsActionTypes.FETCH_ALL_FAIL:
            return {
                ...state,
                error: action.payload
            };

        case ReviewsActionTypes.FETCH_SUCCESS:
        case ReviewsActionTypes.FETCH_ALL_SUCCESS:
            return {
                ...state,
                reviews: action.payload
            };

        case ReviewsActionTypes.REARRANGE:
            const { previous, current } = action;
            const newReviews2 = [...state.reviews];
            const prevItem = newReviews2[previous];
            newReviews2[previous] = newReviews2[current];
            newReviews2[current] = prevItem;
            return {
                ...state,
                reviews: newReviews2
            };


        case ReviewsActionTypes.CREATE_SUCCESS:
            return {
                ...state,
                reviews: [...state.reviews, action.payload]
            };

        case ReviewsActionTypes.UPDATE:
            const newReviews = [...state.reviews];
            newReviews[action.index] = action.payload;
            return {
                ...state,
                reviews: [...newReviews]
            };

        case ReviewsActionTypes.DELETE:
            return {
                ...state,
                reviews: state.reviews.filter((_, index) => action.index !== index)
            };

        default:
            return state;
    }
}
