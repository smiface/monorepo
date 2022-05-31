import { observer } from 'mobx-react-lite';
import {TTodoItem} from '../../../types';
import TodoItem from './todo-item';

const TodoList = (array: TTodoItem[]) => {
  return (
    <div>
      {array.map((el: TTodoItem) => (
        <TodoItem item={el} />
      ))}
    </div>
  );
};

export default observer(TodoList);
