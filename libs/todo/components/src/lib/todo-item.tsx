import { TTodoItem } from '@joindev/todo/types';
import { observer } from 'mobx-react-lite';
// import Store from '../../../store/TodoStore';
import { todoStore } from '@joindev/todo/store';

export const TodoItem = observer(({ item }: { item: TTodoItem }) => {
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

      <button
        className={
          item.isDone
            ? 'p-2 border-2 border-slate-300  transition duration-300 hover:bg-green-100 bg-green-200'
            : 'p-2 border-2 border-slate-300 transition duration-300 hover:bg-red-100  bg-red-200'
        }
        onClick={() => todoStore.toggleTodo(item.id)}
      >
        {item.isDone ? 'Done' : 'Not done'}
      </button>
    </div>
  );
});
