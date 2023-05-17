import { NgModule } from '@angular/core';
import { ApolloLink, DefaultOptions, InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { graphqlApi } from './core/constants/core.constants';


@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {

        const link = ApolloLink.from([httpLink.create({ uri: new URL(graphqlApi).href })]);
        const cache = new InMemoryCache({
          addTypename: false
        });

        const defaultOptions: DefaultOptions = {
          watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore',
          },
          query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          },
          mutate: {
            fetchPolicy: 'no-cache',
          }
        }

        return {
          link,
          cache,
          defaultOptions
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
