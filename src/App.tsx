import Todos from "./Components/Todos/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("Learning Typescript"),
    new Todo("with React")
  ];

  return (
    <div>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
