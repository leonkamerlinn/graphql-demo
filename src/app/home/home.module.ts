import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';
import { ReviewItemComponent } from './components/review-item/review-item.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [HomeComponent, ReviewItemComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FlexModule,
        MatButtonModule
    ]
})
export class HomeModule {
}
