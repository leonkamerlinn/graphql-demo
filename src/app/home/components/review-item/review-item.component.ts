import { Component, Input, OnInit } from '@angular/core';

export type Side = 'left' | 'right';

@Component({
    selector: 'app-review-item',
    templateUrl: './review-item.component.html',
    styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit {
    @Input()
    imageSide: Side = 'left';

    constructor() {
    }

    ngOnInit() {
    }

}
