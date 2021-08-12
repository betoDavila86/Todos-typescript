import React from "react";
import TodoComponent from "../Todo/Todo";
import Todo from "../../models/todo";

const Todos: React.FC<{ todos: Todo[] }> = ({ todos }) => {
    return (<ul>
        {todos.map(todo => <TodoComponent todoItem={todo} />)}
    </ul>);
}

export default Todos;