import React from "react";

const Todo: React.FC<{ todoItem: { id: string; text: string } }> = ({ todoItem }) => {
    return <li key={todoItem.id}>{todoItem.text}</li>;
}

export default Todo;