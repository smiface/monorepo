// create mobx store with counter only
// import { observable, action } from 'mobx';

import { makeAutoObservable } from 'mobx';

// create class Counter makeAutoObservable
class Counter {
  constructor() {
    makeAutoObservable(this);
  }
  count = 0;
  increment = () => {
    this.count++;
  };
  decrement = () => {
    this.count--;
  };
}

// create class Todos makeAutoObservable
class Todos {
    constructor() {
        makeAutoObservable(this);
    }
    todos = [];
    addTodo = (todo) => {
        this.todos.push(todo);
    }
    removeTodo = (todo) => {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }
}

// class auth makeAutoObservable
class Auth {
    constructor() {
        makeAutoObservable(this);
    }
    isLoggedIn = false;

    trylogin = () => {
        // if localstorage token login true else logout
        if (localStorage.getItem('token')) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    }

    login = () => {
        // check localstorage token
        this.isLoggedIn = true;
    }
    logout = () => {
        this.isLoggedIn = false;
    }
}


// create RootStore makeAutoObservable
class RootStore {
    constructor() {
        makeAutoObservable(this);
    }
    counter = new Counter();
    todos = new Todos();
    auth = new Auth();
}

const store = new RootStore();

export default store