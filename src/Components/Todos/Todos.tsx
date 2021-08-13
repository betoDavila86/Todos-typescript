import React from "react";
import TodoComponent from "../Todo/Todo";
import Todo from "../../models/todo";

const Todos: React.FC<{ todos: Todo[], onRemoveTodo: (id: string) => void }> = ({ todos, onRemoveTodo }) => {
    return (<ul>
        {todos.map(({id, text}) =>
            <TodoComponent
                key={id}
                text={text}
                onRemoveTodo={onRemoveTodo.bind(null, id)}
            />)
        }
    </ul>);
}

export default Todos;