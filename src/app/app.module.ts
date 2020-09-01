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
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ReviewsEffects } from './store/effects/reviews.effects';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FlexModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { ReviewFormDialogComponent } from './lista/components/review-form-dialog/review-form-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        BrowserAnimationsModule,

        EffectsModule.forRoot([RouterEffects, ReviewsEffects]),
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot({ serializer: RouterSerializer }),
        GraphQLModule,
        HttpClientModule,
        FlexModule,
        MatSidenavModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatSelectModule
    ],
    entryComponents: [ReviewFormDialogComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
