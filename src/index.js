import React from "react";
import ReactDOM from "react-dom";
import { values } from "mobx";
import { observer } from "mobx-react";
import store from './store/RootStore';
import "./styles.css";

const TodoItem = observer(({ todo }) => (
  <li
    key={todo.id}
    className={todo.isCompleted ? 'completed' : undefined}
    onClick={() => todo.toggelCompleted()}
  >
    {todo.title}
  </li>
))


function App() {
  console.log('render')
  return (
    <div className="App">
      <ul>
        {values(store.todos.list).map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <button type="button" onClick={() => store.todos.add('oil')}>
        Add
      </button>
    </div>
  );
}

const ObserveApp = observer(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<ObserveApp />, rootElement);
