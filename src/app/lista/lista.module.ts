import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';
import { RouterModule, Routes } from '@angular/router';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReviewFormDialogComponent } from './components/review-form-dialog/review-form-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DeleteButtonModule } from './components/delete-button/delete-button.module';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
    {
        path: '',
        component: ListaComponent
    }
];

@NgModule({
    declarations: [ListaComponent, ReviewFormComponent, ReviewFormDialogComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        DragDropModule,
        MatFormFieldModule,
        MatSelectModule,
        DeleteButtonModule,
        FlexModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
    ]
})
export class ListaModule {
}
