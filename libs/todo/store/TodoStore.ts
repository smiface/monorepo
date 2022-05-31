import { makeAutoObservable } from 'mobx';
import { TTodoItem, TTodoItemToAdd } from '../types';

class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }

  array: TTodoItem[] = [];
  idCounter: number = 0;
  editTodoItem : TTodoItem | null = null;

  setEditId(todo: TTodoItem) {
    this.editTodoItem = todo;
  }

  setTodos(array: TTodoItem[]) {
    this.array = array;
  }

  addTodo(item: TTodoItemToAdd) {
    let newArray = JSON.parse(JSON.stringify(this.array));
    newArray.push({ id: this.idCounter + 1, title: item.title });
    this.setTodos(newArray);
  }

  removeTodo(id: number) {
    let newArray = this.array.filter((el) => el.id !== id);
    this.setTodos(newArray);
  }

  toggleTodo(id: number) {
    let newArray = this.array.map((el) =>
      el.id === id ? { ...el, isDone: !el.isDone } : el
    );
    this.setTodos(newArray);
  }

  editTodo(id: number, title: string) {
    let newArray = this.array.map((el) =>
      el.id === id ? { ...el, title: title } : el
    );
    this.setTodos(newArray);
  }
}
export const todoStore = new TodoStore();
// export default new TodoStore();
