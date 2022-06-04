// import { TTodoItem } from 'libs/todo/types';
import { observer } from 'mobx-react-lite';
import { todoStore } from '@joindev/todo/store';
import { useEffect, useState } from 'react';
// import { Button } from '@joindev/button';
import { Button } from '@joindev/button';

export const Modal = observer(() => {
  const todo = todoStore.editTodoItem;
  const [str, setStr] = useState(todo ? todo.title : '');
  
  useEffect(()=>{
    setStr(todo?.title || '')
  },[todo])

  function edit() {
    todo ? todoStore.editTodo({ ...todo, title: str }) : console.log('no todo'); // ???
  }

  function close() {
    todoStore.setEditTodoItem(null);
  }

    return (
    <div>
      {todo ? (
        <div className="transition  fixed top-20 right-8 bg-slate-50 p-4 border-2 max-w-lg  border-slate-300 rounded-md pt-4 pb-4">
          <p>Edit todo</p>
          <input
            type="text"
            value={str}
            placeholder={todoStore.editTodoItem?.title || ''}
            className="p-2 border-2 border-slate-300 mr-2"
            onChange={(e) => setStr(e.target.value)}
          />

          <Button fn={edit} color="green" addition="mr-2" text="save" />
          <Button fn={close} color="red" text="cancel" />
        </div>
      ) : (
        ''
      )}
    </div>
  );
});
