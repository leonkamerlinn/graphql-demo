import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteButtonComponent } from './delete-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [DeleteButtonComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [DeleteButtonComponent]
})
export class DeleteButtonModule {
}
