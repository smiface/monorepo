import { ApolloProvider } from '@apollo/client';
import { Todos } from './apollo-todos';
import { Users } from './apollo-users';
import { client } from './client';

export function ApolloMain() {
  return (
    <ApolloProvider client={client}>
      <div className="p-2 ">
        <Users />
        <Todos />
      </div>
    </ApolloProvider>
  );
}

export default ApolloMain;
