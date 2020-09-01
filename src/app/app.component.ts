import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectReviewsCount } from './app.selectors';
import { Observable } from 'rxjs';
import { FetchAllReviews } from './store/actions/reviews.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    count$: Observable<number>;

    constructor(private store: Store) {
        this.store.dispatch(new FetchAllReviews());
        this.count$ = this.store.select(selectReviewsCount);
    }
}
