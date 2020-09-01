import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { RouterStateUrl } from './router-serializer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment';
import { reviewsReducer, ReviewsState } from './store/reducers/reviews.reducer';


export interface CoreState {
    routerState: RouterReducerState<RouterStateUrl>;
    reviewsState: ReviewsState;
}

export const reducers: ActionReducerMap<CoreState> = {
    routerState: routerReducer,
    reviewsState: reviewsReducer
};

export const metaReducers: MetaReducer[] = !environment.production
    ? [storeFreeze]
    : [];
