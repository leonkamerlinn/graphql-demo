import { Action } from '@ngrx/store';
import { Episode, Maybe, Review, ReviewInput } from '../../../generated/graphql';

export enum ReviewsActionTypes {
    FETCH = '[REVIEWS] Fetch',
    FETCH_SUCCESS = '[REVIEWS] Fetch Success',
    FETCH_FAIL = '[REVIEWS] Fetch Fail',

    FETCH_ALL = '[REVIEWS] Fetch All',
    FETCH_ALL_SUCCESS = '[REVIEWS] Fetch All Success',
    FETCH_ALL_FAIL = '[REVIEWS] Fetch All Fail',

    CREATE = '[REVIEWS] Create',
    CREATE_SUCCESS = '[REVIEWS] Create Success',
    CREATE_FAIL = '[REVIEWS] Create Fail',

    UPDATE = '[REVIEWS] Update',
    DELETE = '[REVIEWS] Delete',
    REARRANGE = '[REVIEWS] Rearrange',
}

export class FetchReviews implements Action {
    readonly type = ReviewsActionTypes.FETCH;

    constructor(public payload: Episode) {
    }
}

export class FetchReviewsSuccess implements Action {
    readonly type = ReviewsActionTypes.FETCH_SUCCESS;

    constructor(public payload: Array<Maybe<{ __typename?: 'Review' } & Pick<Review, 'episode' | 'commentary' | 'stars'>>>) {
    }
}

export class FetchReviewsFail implements Action {
    readonly type = ReviewsActionTypes.FETCH_FAIL;

    constructor(public payload: Error) {
    }
}

export class FetchAllReviews implements Action {
    readonly type = ReviewsActionTypes.FETCH_ALL;
}

export class FetchAllReviewsSuccess implements Action {
    readonly type = ReviewsActionTypes.FETCH_ALL_SUCCESS;

    constructor(public payload: Array<Maybe<{ __typename?: 'Review' } & Pick<Review, 'episode' | 'commentary' | 'stars'>>>) {
    }
}

export class FetchAllReviewsFail implements Action {
    readonly type = ReviewsActionTypes.FETCH_ALL_FAIL;

    constructor(public payload: Error) {
    }
}

export class CreateReview implements Action {
    readonly type = ReviewsActionTypes.CREATE;

    constructor(public episode: Episode, public review: ReviewInput) {
    }
}

export class CreateReviewSuccess implements Action {
    readonly type = ReviewsActionTypes.CREATE_SUCCESS;

    constructor(public payload: Maybe<{ __typename?: 'Review' } & Pick<Review, 'episode' | 'commentary' | 'stars'>>) {
    }
}

export class CreateReviewFail implements Action {
    readonly type = ReviewsActionTypes.CREATE_FAIL;

    constructor(public payload: Error) {
    }
}

export class UpdateReview implements Action {
    readonly type = ReviewsActionTypes.UPDATE;

    constructor(public index: number, public payload: Maybe<{ __typename?: 'Review' } & Pick<Review, 'episode' | 'commentary' | 'stars'>>) {
    }
}

export class DeleteReview implements Action {
    readonly type = ReviewsActionTypes.DELETE;

    constructor(public index: number) {
    }
}

export class RearrangeReview implements Action {
    readonly type = ReviewsActionTypes.REARRANGE;

    constructor(public previous: number, public current: number) {
    }
}

export type ReviewsActions =
    | FetchReviews
    | FetchReviewsSuccess
    | FetchReviewsFail
    | FetchAllReviews
    | FetchAllReviewsSuccess
    | FetchAllReviewsFail
    | CreateReview
    | CreateReviewSuccess
    | CreateReviewFail
    | UpdateReview
    | DeleteReview
    | RearrangeReview;
