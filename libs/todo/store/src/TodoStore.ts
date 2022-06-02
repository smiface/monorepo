import { makeAutoObservable } from 'mobx';
import { TTodoItem, TTodoItemToAdd } from '@joindev/todo/types';

export class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }

  array: TTodoItem[] = [
    { id: 1, title: 'Start code', isDone: true },
    { id: 2, title: 'Stop code', isDone: false },
    { id: 3, title: 'Delete code', isDone: false },
  ];

  idCounter = 3;
  editTodoItem: TTodoItem | null = null;

  setTodos(array: TTodoItem[]) {
    this.array = array;
  }

  setEditTodoItem(item: TTodoItem | null) {
    this.editTodoItem = item;
  }

  addTodo(item: TTodoItemToAdd) {
    const newArray = JSON.parse(JSON.stringify(this.array));
    newArray.push({ id: this.idCounter + 1, title: item.title });
    this.setTodos(newArray);
  }

  removeTodo(id: number) {
    const newArray = this.array.filter((el) => el.id !== id);
    this.setTodos(newArray);
  }

  toggleTodo(id: number) {
    const newArray = this.array.map((el) =>
      el.id === id ? { ...el, isDone: !el.isDone } : el
    );
    this.setTodos(newArray);
  }

  editTodo(todo: TTodoItem) {
    const newArray = this.array.map((el) => (el.id === todo.id ? todo : el));
    this.setTodos(newArray);
    this.editTodoItem = null
  }
}
export const todoStore = new TodoStore();
// export default new TodoStore();
