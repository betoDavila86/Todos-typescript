import React from "react";

const Todo: React.FC<{ text: string, onRemoveTodo: () => void }> = ({ text, onRemoveTodo }) => {
    return <li onClick={onRemoveTodo}>{text}</li>;
}

export default Todo;