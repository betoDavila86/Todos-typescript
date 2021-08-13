import React, { useRef, useContext } from "react";
import { TodosContext } from "../../store/todos-context";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    let textInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = textInputRef.current!.value;
        if (enteredText?.trim().length === 0) {
            // throw an error;
            return;
        }
        todosCtx.addTodo(enteredText);
        textInputRef.current!.value = "";
    }
    return <form onSubmit={submitHandler}>
        <input
            type="text"
            name="text"
            placeholder="Add a new todo"
            ref={textInputRef}
        />
        <button type="submit">Add todo!</button>
    </form>
}

export default NewTodo;