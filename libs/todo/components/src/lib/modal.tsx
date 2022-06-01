// import { TTodoItem } from 'libs/todo/types';
import { observer } from 'mobx-react-lite';
import { todoStore } from '@joindev/todo/store';
import { useState } from 'react';

const Modal = () => {
  const todo = todoStore.editTodoItem;
  const [str, setStr] = useState(todo ? todo.title : '');

  return (
    <div>
      {todo ? (
        <div>
          <p>modal</p>
          <input
            type="text"
            value={str}
            onChange={(e) => setStr(e.target.value)}
          />
          <button>save</button>
          <button onClick={() => todoStore.editTodo({ ...todo, title: str })}>
            cancel
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default observer(Modal);
