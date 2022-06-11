import { gql, useMutation, useQuery } from '@apollo/client';
import { Button } from '@joindev/button';
import { arrayExtensions } from 'mobx/dist/internal';
import { useGetTodos } from './hooks/useGetTodos';
import { useToggleTodo } from './hooks/useToggleTodo';
import { TodoElement } from './types';

export const Todos = () => {
  const toggleTodo = useToggleTodo();
  const todos = useGetTodos();
  if (todos.loading) return <>loading</>;
  if (todos.error) return <>error</>;

  console.log(todos);

  return (
    <div>
      <Button text="upd" fn={() => console.log(todos.data.test_todos.map((el: TodoElement) => el.done))}>
        upd
      </Button>
      {todos.data.test_todos.map((el: TodoElement) => (
        <div className='p2 border-2 border-slate-200'>
          <h3>{el.title}</h3>

          <div key={JSON.stringify(el)}>
            {/* <Button text={el.title + '' + el.done ? 'done' : 'not done'} fn={() => toggleTodo.handleClick(el)} /> */}
            <Button text={el.done ? 'done' : 'not done'} fn={() => toggleTodo.handleClick(el)} />
          </div>
        </div>
      ))}
    </div>
  );
};
