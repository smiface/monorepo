// import styles from './todo-components.module.css';

import { observer } from 'mobx-react-lite';
import { Modal } from './modal';
import { TodoList } from './todo-list';

/* eslint-disable-next-line */
export interface TodoComponentsProps {}

export const TodoComponents = observer((props: TodoComponentsProps) => {
  return (
    <div className="p-4 ">
      <Modal />
      <TodoList />
    </div>
  );
});
