import { makeAutoObservable } from 'mobx';
import { TTodoItem, TTodoItemToAdd } from '@joindev/todo/types';

export class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }

  array: TTodoItem[] = [];
  // idCounter: number = 0;
  editTodoItem: TTodoItem | null = null;

  setEditItem(todo: TTodoItem) {
    this.editTodoItem = todo;
  }

  setTodos(array: TTodoItem[]) {
    this.array = array;
  }

  addTodo(item: TTodoItemToAdd) {
    // let newArray = JSON.parse(JSON.stringify(this.array));
    // newArray.push({ id: this.idCounter + 1, title: item.title });
    // this.setTodos(newArray);
  }

  removeTodo(id: number) {
    // let newArray = this.array.filter((el) => el.id !== id);
    // this.setTodos(newArray);
  }

  toggleTodo(id: number) {
    // let newArray = this.array.map((el) =>
    //   el.id === id ? { ...el, isDone: !el.isDone } : el
    // );
    // this.setTodos(newArray);
  }

  editTodo(todo: TTodoItem) {
    // let newArray = this.array.map((el) =>
    //   el.id === todo.id ? todo : el
    // );
    // this.setTodos(newArray);
  }
}
export const todoStore = new TodoStore();
// export default new TodoStore();
