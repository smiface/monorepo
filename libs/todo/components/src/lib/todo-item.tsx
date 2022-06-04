import { TTodoItem } from '@joindev/todo/types';
import { observer } from 'mobx-react-lite';
// import Store from '../../../store/TodoStore';
import { todoStore } from '@joindev/todo/store';
import { Button } from '@joindev/button';

export const TodoItem = observer(({ item }: { item: TTodoItem }) => {
  function toggleTodo() {
    todoStore.toggleTodo(item.id);
  }

  return (
    <div className="border-b-2  border-b-slate-300   pt-4 pb-4">
      <p className="pt-2 pb-2">{item.title}</p>
      <button
        className="p-2 border-2 border-slate-300 hover:bg-slate-100 transition duration-300 mr-2"
        onClick={() => {
          todoStore.setEditTodoItem(item);
        }}
      >
        edit
      </button>

      {item.isDone ? (
        <Button color="green" fn={toggleTodo} text="Done" />
      ) : (
        <Button color="red" fn={toggleTodo} text="Not done" />
      )}
    </div>
  );
});
