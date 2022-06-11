import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env['NEXT_PUBLIC_HASURA_LINK'],
      headers: {
        'x-hasura-admin-secret': process.env['NEXT_PUBLIC_HASURA_SECRET'],
      },
    }),
  });
};
export const client = createApolloClient();
