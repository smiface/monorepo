import { TTodoItem } from '@joindev/todo/types';
import { observer } from 'mobx-react-lite';
// import Store from '../../../store/TodoStore';
import { todoStore } from '@joindev/todo/store';

export const TodoItem = observer(({ item }: { item: TTodoItem }) => {
  return (
    <div style={{ border: item.isDone ? 'red' : 'blue' }}>
      <p>{item.title}</p>
      {/* <button onClick={() => todoStore.setEditId(item.id)}>edit</button> */}
    </div>
  );
})
