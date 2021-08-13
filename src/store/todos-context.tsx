import React, { useState } from "react";
import Todo from "../models/todo"

type TodosContextObj = {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
    todos: [],
    addTodo: () => { },
    removeTodo: (id: string) => { },
});

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        })
    }

    const removeTodoHandler = (idTodo: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== idTodo);
        })
    }

    const contextValue: TodosContextObj = {
        todos: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
};

export default TodosContextProvider;

