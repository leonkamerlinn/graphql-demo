import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Episode, ReviewInput } from '../../../../generated/graphql';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-review-form',
    templateUrl: './review-form.component.html',
    styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit, OnChanges {
    form: FormGroup;

    @Input()
    formData: ReviewInput;

    @Input()
    episode: Episode;

    @Input()
    index: number;

    @Output()
    submittedData: EventEmitter<any> = new EventEmitter<any>();

    episodes = [
        Episode.Newhope,
        Episode.Jedi,
        Episode.Empire
    ];

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            stars: this.fb.control(null, Validators.required),
            commentary: this.fb.control(null),
            episode: this.fb.control(null, Validators.required)
        });
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        const value = changes?.formData?.currentValue;
        const episode = changes?.episode?.currentValue;
        if (value) {
            this.stars.setValue(value?.stars);
            this.commentary.setValue(value?.commentary);
        }

        if (episode) {
            this.episodeControl.setValue(episode);
        }
    }

    get stars(): FormControl {
        return this.form.get('stars') as FormControl;
    }

    get commentary(): FormControl {
        return this.form.get('commentary') as FormControl;
    }

    get episodeControl(): FormControl {
        return this.form.get('episode') as FormControl;
    }

    onSubmit(value: any) {
        this.submittedData.emit({ value, index: this.index });
    }
}
