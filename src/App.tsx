import { useState } from "react";
import NewTodo from "./Components/NewTodo/NewTodo";
import Todos from "./Components/Todos/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo =  new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
