import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    let textInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = textInputRef.current!.value;
        if (enteredText?.trim().length === 0) {
            // throw an error;
            return;
        }
        props.onAddTodo(enteredText);
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