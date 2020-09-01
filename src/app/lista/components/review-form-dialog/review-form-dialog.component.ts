import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Episode, ReviewInput } from '../../../../generated/graphql';

export interface ReviewFormDialogData {
    reviewInput: ReviewInput;
    episode: Episode;
    index: number;
}

@Component({
    selector: 'app-review-form-dialog',
    templateUrl: './review-form-dialog.component.html',
    styleUrls: ['./review-form-dialog.component.scss']
})
export class ReviewFormDialogComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<ReviewFormDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: ReviewFormDialogData) {
    }


    ngOnInit() {
    }

    onSubmit($event: any) {
        this.dialogRef.close($event);
    }
}
