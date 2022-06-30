// create functional component next.js page

import { useEffect, useState } from 'react';
import axios from 'axios';
import store from './counter';
import { observer } from 'mobx-react-lite';

// create mobx counter store

// create beautiful pink tailwind button functional component
const XButton = ({ text, fn }) => {
  return (
    <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={fn}>
      {text}
    </button>
  );
};

const Content = observer(() => {
  const s = store;

  return (
    <>
      <div>
        <h1>Cop</h1>
        <p>The cop is a police officer.</p>

        {/* input to add todo */}
        <input type="text" placeholder="add todo" id="inputTodo" />
        {/* button to add todo */}

        {/* tailwind column */}
        <div className="flex flex-col">
          <XButton text="increment" fn={() => s.counter.increment()} />
          {/* same button with dectiment */}
          <XButton text="decrement" fn={() => s.counter.decrement()} />
          {/* create  text tailwind counter  p*/}
          <p className=" text-pink-500 font-bold py-2 px-4 rounded">{s.counter.count}</p>
        </div>

        {s.todos.todos.map((todo, index) => (
          // wrap p into div to make it easier to style
          <div key={index}>
            <p>{todo}</p>
            {/* button remove todo */}
            <button onClick={() => s.todos.removeTodo(index)}>Remove Todo</button>
          </div>
        ))}
      </div>
    </>
  );
});

const CopilotCompoent = () => {
  const s = store;

  return (
    <div>

{/* create modal component */}
      <div className="bg-gray-100 h-[100%] flex">
        <Content />
        {/* create button to close modal */}
        <button onClick={() => s.modal. ()}>Close</button>

      </div>

{/* create button to open modal */}
      <div className="flex flex-col">
        <XButton text="Open Modal" fn={() => s.modal. ()} />
      </div>


      {/* header with logout pink button */}
      <div className="flex justify-between">
        <div className="flex">
          <h1>Copilot</h1>
        </div>
        <div className="flex">
          {s.auth.isLoggedIn ? (
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={() => s.auth.logout()}>
              Logout
            </button>
          ) : (
            false
          )}
        </div>
      </div>

      {s.auth.isLoggedIn ? (
        <Content />
      ) : (
        <div>
          <h1>Sign in</h1>
          {/* nice pink tailwind login button */}
          <button onClick={() => s.auth.login()} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default observer(CopilotCompoent);
