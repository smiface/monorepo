import { observer } from 'mobx-react-lite';
import { TTodoItem } from '@joindev/todo/types';
import { TodoItem } from './todo-item';
import { todoStore } from '@joindev/todo/store';

// export const TodoList = observer((array: TTodoItem[]) => {
export const TodoList = observer(() => {
  return (
    <div>
      {todoStore.array.map((el: TTodoItem) => (
        <TodoItem item={el} />
      ))}
    </div>
  );
});
