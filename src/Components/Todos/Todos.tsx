import React, { useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import TodoComponent from "../Todo/Todo";

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (<ul>
        {todosCtx.todos.map(({id, text}) =>
            <TodoComponent
                key={id}
                text={text}
                onRemoveTodo={todosCtx.removeTodo.bind(null, id)}
            />)
        }
    </ul>);
}

export default Todos;