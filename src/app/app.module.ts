import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './index';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterSerializer } from './router-serializer';
import { RouterEffects } from './store/effects/router.effect';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        BrowserAnimationsModule,

        EffectsModule.forRoot([RouterEffects]),
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot({ serializer: RouterSerializer }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
