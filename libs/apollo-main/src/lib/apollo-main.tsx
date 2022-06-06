import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { createClient } from 'graphql-ws';
import { Todos } from './apollo-todos';
import { Users } from './apollo-users';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { WebSocketLink } from "@apollo/client/link/ws"
 
const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // uri: process.env['NX_HASURA_LINK'],
      uri: process.env['NEXT_PUBLIC_HASURA_LINK'],
      headers: {
        'x-hasura-admin-secret': process.env['NEXT_PUBLIC_HASURA_SECRET'],
      },
    }),
  });
};

// function getHeaders() {
//   const headers = {}
//   const token = window.localStorage.getItem("apollo-token")
//   if (token) {
//       headers["Authorization"] = `Bearer ${token}`
//   }
//   return headers
// }

// // Create an http link:
// const httpLink = new HttpLink({
//   uri: "https://hasura.io/learn/graphql",
//   fetch: (uri: RequestInfo, options: RequestInit) => {
//       options.headers = getHeaders()
//       return fetch(uri, options)
//   },
// })

// // Create a WebSocket link:
// const wsLink = new WebSocketLink({
//    uri: "wss://hasura.io/learn/graphql",
//    options: {
//        reconnect: true,
//        lazy: true,
//        timeout: 30000,
//        inactivityTimeout: 30000,
//        connectionParams: () => {
//            return { headers: getHeaders() }
//        },
//    },
// })

// const errorLink = onError((error) => {
//   if (process.env.NODE_ENV !== "production") {
//       logErrorMessages(error)
//   }
// })

// Create the apollo client
// export const apolloClient = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: errorLink.concat(httpLink),
//   link: errorLink.concat(
//       split(
//           // split based on operation type
//           ({ query }) => {
//               const definition = getMainDefinition(query)
//               return (
//                   definition.kind === "OperationDefinition" &&
//                   definition.operation === "subscription"
//               )
//           },
//           wsLink,
//           httpLink
//       )
//   ),
// })

const client = createApolloClient();

export function ApolloMain() {
  return (
    <ApolloProvider client={client}>
      <div className='p-2 '>
      <Users />
      <Todos />
      </div>
    </ApolloProvider>
  );
}

export default ApolloMain;
