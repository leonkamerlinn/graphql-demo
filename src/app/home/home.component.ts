import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectReviewsCount } from '../app.selectors';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    count$: Observable<number>;

    constructor(private store: Store) {
        // @ts-ignore
        this.count$ = this.store.select(selectReviewsCount);
    }

    ngOnInit() {
    }

}
