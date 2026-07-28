import { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { todoReducer, initialState } from "./reducer";

function App() {

  const [todos, dispatch] = useReducer(
    todoReducer,
    initialState
  );

  return (
    <div>

      <h1>Todo List</h1>

      <TodoForm dispatch={dispatch} />

      <TodoList
        todos={todos}
        dispatch={dispatch}
      />

    </div>
  );
}

export default App;