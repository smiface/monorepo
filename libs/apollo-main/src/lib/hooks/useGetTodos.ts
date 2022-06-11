import { useQuery } from "@apollo/client";
import { GET_TODOS_WITH_USER_DATA} from "../gql/todos/gql";

export const useGetTodos = () => {
  const { loading, error, data } = useQuery(GET_TODOS_WITH_USER_DATA, {
    pollInterval: 500,
    // fetchPolicy: 'no-cache'
    fetchPolicy: 'network-only',
  });

  return { loading, error, data }
};
