// import styles from './todo-components.module.css';

import Modal from './modal';
import { TodoList } from './todo-list';

/* eslint-disable-next-line */
export interface TodoComponentsProps {}

export function TodoComponents(props: TodoComponentsProps) {
  return (
    <div className="p-4">
      <Modal />
      <TodoList />
    </div>
  );
}
