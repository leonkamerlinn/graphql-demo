import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
    CreateReview,
    CreateReviewFail,
    CreateReviewSuccess,
    FetchAllReviews, FetchAllReviewsFail,
    FetchReviews,
    FetchReviewsFail,
    FetchReviewsSuccess,
    ReviewsActionTypes
} from '../actions/reviews.actions';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { CreateReviewGQL, Episode, GetReviewsGQL } from '../../../generated/graphql';
import { combineLatest, of } from 'rxjs';

@Injectable()
export class ReviewsEffects {
    constructor(private actions$: Actions, private getReviewsGQL: GetReviewsGQL, private createReviewGQL: CreateReviewGQL) {
    }

    @Effect()
    fetchReviews$ = this.actions$.pipe(
        ofType<FetchReviews>(ReviewsActionTypes.FETCH),
        switchMap((action) => {
            return this.getReviewsGQL.fetch({ episode: action.payload }).pipe(
                map(result => result.data.reviews)
            ).pipe(
                map(reviews => new FetchReviewsSuccess(reviews)),
                catchError(err => of(new FetchReviewsFail(err)))
            );
        })
    );

    @Effect()
    createReview$ = this.actions$.pipe(
        ofType<CreateReview>(ReviewsActionTypes.CREATE),
        concatMap(({ episode, review }) => {
            return this.createReviewGQL.mutate({ episode, review }).pipe(
                map(result => result.data.createReview)
            ).pipe(
                map(createdReview => new CreateReviewSuccess(createdReview)),
                catchError(err => of(new CreateReviewFail(err)))
            );
        })
    );

    @Effect()
    fetchAllReviews$ = this.actions$.pipe(
        ofType<FetchAllReviews>(ReviewsActionTypes.FETCH_ALL),
        switchMap(() => {
            return combineLatest([
                this.getReviewsGQL.fetch({ episode: Episode.Empire }).pipe(
                    map(result => result.data.reviews)
                ),
                this.getReviewsGQL.fetch({ episode: Episode.Jedi }).pipe(
                    map(result => result.data.reviews)
                ),
                this.getReviewsGQL.fetch({ episode: Episode.Newhope }).pipe(
                    map(result => result.data.reviews)
                )
            ]).pipe(
                map((reviews) => new FetchReviewsSuccess(
                    reviews.reduce((acc, curr) => [...acc, ...curr], [])
                )),
                catchError(err => of(new FetchAllReviewsFail(err)))
            );
        })
    );
}
