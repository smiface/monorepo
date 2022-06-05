import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { ApolloA } from './apollo-a';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://magnetic-killdeer-76.hasura.app/v1/graphql',
  }),
});

export interface ApolloMainProps {}

export function ApolloMain(props: ApolloMainProps) {

  return (
    <ApolloProvider client={client}>
      <div>sup</div>
      <ApolloA />
    </ApolloProvider>
  );
}

export default ApolloMain;
