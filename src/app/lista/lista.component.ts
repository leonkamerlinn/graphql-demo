import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { CreateReview, DeleteReview, RearrangeReview, UpdateReview } from '../store/actions/reviews.actions';
import { selectAllReviews, selectReviewsByEpisode } from '../app.selectors';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Episode, Review } from '../../generated/graphql';
import { MatSelectChange } from '@angular/material/select';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ReviewFormDialogComponent, ReviewFormDialogData } from './components/review-form-dialog/review-form-dialog.component';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
    private episodeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('ALL');
    reviews$: Observable<Array<Maybe<{ __typename?: 'Review' } & Pick<Review, 'episode' | 'commentary' | 'stars'>>>>;

    constructor(private store: Store, private matDialog: MatDialog) {

        this.reviews$ = this.episodeSubject.asObservable().pipe(
            switchMap((episode) => {
                if (episode === 'ALL') {
                    return this.store.select(selectAllReviews);
                }

                return this.store.select(selectReviewsByEpisode(episode as Episode));
            })
        );
    }

    ngOnInit() {
    }

    drop(event: CdkDragDrop<string[]>) {
        this.store.dispatch(new RearrangeReview(event.previousIndex, event.currentIndex));
    }

    episodeChange($event: MatSelectChange) {
        const value = $event.value;
        this.episodeSubject.next(value);
    }

    onDelete(i: number) {
        this.store.dispatch(new DeleteReview(i));
    }

    createOrUpdate(index: number, reviewItem?: Maybe<{ __typename?: 'Review' } & Pick<Review, 'episode' | 'commentary' | 'stars'>>) {
        const data: ReviewFormDialogData = {
            reviewInput: {
                stars: reviewItem?.stars,
                commentary: reviewItem?.commentary,
            },
            episode: reviewItem?.episode,
            index
        };
        this.matDialog.open(ReviewFormDialogComponent, {
            data
        }).afterClosed().subscribe((result) => {
            const { value } = result;
            console.log(result);
            if (result.index === -1) {
                this.store.dispatch(new CreateReview(value.episode, {
                    stars: value.stars,
                    commentary: value.commentary ? value.commentary : null
                }));
            } else {
                this.store.dispatch(new UpdateReview(result.index, {
                    stars: value.stars,
                    commentary: value.commentary ? value.commentary : null,
                    episode: value?.episode
                }));
            }

        });
    }
}
