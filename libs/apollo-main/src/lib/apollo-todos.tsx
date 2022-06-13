import { gql, useMutation, useQuery } from '@apollo/client';
import { Button } from '@joindev/button';

export const Todos = () => {
  // const toggleTodo = useToggleTodo();
  // const todos = useGetTodos();
  // if (todos.loading) return <>loading</>;
  // if (todos.error) return <>error</>;

  return (
    <div>
      <Button text="clear button" color='red' fn={() => console.log(`clear button`)} />
    </div>
  );
};
