import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { RouterStateUrl } from './router-serializer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment';


export interface CoreState {
    routerState: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<CoreState> = {
    routerState: routerReducer,
};

export const metaReducers: MetaReducer[] = !environment.production
    ? [storeFreeze]
    : [];
