import { useQuery } from "@apollo/client";
import { GET_USERS } from "../gql/todos/gql";

export const useGetUsers = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  return { loading, error, data };
};
