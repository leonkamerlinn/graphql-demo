import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        environment.production ? [] : StoreDevtoolsModule.instrument()
    ],
    bootstrap: [AppComponent],
})
export class AppServerModule {
}
