import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";
import { Link } from "react-router-dom";

const CreateTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodos = [...todos, inputValue];
    setTodos(newTodos);
    setInputValue("");
    localStorage.setItem("todos2", JSON.stringify(newTodos) )
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h3>CreateTodo</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
      </form>
      {todos.join(", ")}
    </div>
  );
};

export default CreateTodo;
