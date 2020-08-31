import { NgModule } from '@angular/core';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from '../environments/environment';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';

export function createApollo(httpLink: HttpLink) {
    return {
        link: httpLink.create({ uri: environment.endpoint }),
        cache: new InMemoryCache(),
    };
}

@NgModule({
    exports: [ApolloModule, HttpLinkModule],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [HttpLink],
        },
    ],
})
export class GraphQLModule {
}
