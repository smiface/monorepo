import { useMutation } from "@apollo/client";
import { GET_TODOS, GET_TODOS_WITH_USER_DATA, TOGGLE_TODO_DONE } from "../gql/todos/gql";
import { TodoElement } from "../types";

export const useToggleTodo = () => {
    const [mutateFunction, { data, loading, error }] = useMutation(TOGGLE_TODO_DONE, {
        refetchQueries: [
          {query: GET_TODOS_WITH_USER_DATA}
        ],
      });
  
    const handleClick = (el: TodoElement) => {
      mutateFunction({
        variables: {
          id: el.id,
          done: !el.done,
        },
      });
    };
  
    return {handleClick, data, loading, error}
  }