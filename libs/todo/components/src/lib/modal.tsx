// import { TTodoItem } from 'libs/todo/types';
import { observer } from 'mobx-react-lite';
import { todoStore } from '@joindev/todo/store';
import { useState } from 'react';

export const Modal = observer(() => {
  const todo = todoStore.editTodoItem;
  const [str, setStr] = useState(todo ? todo.title : '');

  return (
    <div>
      {todo ? (
        <div className="transition  fixed top-20 right-8 bg-slate-50 p-4 border-2 max-w-lg  border-slate-300 rounded-md pt-4 pb-4">
          <p>Edit todo</p>
          <input
            type="text"
            value={todo?.title || ''}
            placeholder={todoStore.editTodoItem?.title || ''}
            className="p-2 border-2 border-slate-300 mr-2"
            onChange={(e) => setStr(e.target.value)}
          />
          <button
            className="p-2 border-2 border-slate-300  bg-green-100   hover:bg-green-200 transition-all duration-300"
            onClick={() => todoStore.editTodo({ ...todo, title: str })}
          >
            save
          </button>
          <button
            className="p-2 border-2 border-slate-300 ml-2  bg-red-100  hover:bg-red-200 transition-all duration-300"
            onClick={() => todoStore.setEditTodoItem(null)}
          >
            cancel
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
});
