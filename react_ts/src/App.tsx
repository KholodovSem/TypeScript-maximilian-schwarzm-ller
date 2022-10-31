import React, { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { TodoList } from "./components/TodoList";

interface Todo {
  id: string;
  title: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "t1", title: "Finish course" },
  ]);

  const todoAddHandler = (text: string) => {
    setTodos((prevState) => [
      ...prevState,
      { id: Date.now().toString(), title: text },
    ]);
  };

  const todoRemoveHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <CreateTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDelete={todoRemoveHandler} />
    </div>
  );
}

export default App;
