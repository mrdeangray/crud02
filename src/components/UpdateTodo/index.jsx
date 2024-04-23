import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { TodoContext } from "../context/TodoProvider";

const UpdateTodo = () => {
  const { todo } = useParams();
  const [inputValue, setInputValue] = useState(todo);
  const { todos, setTodos } = useContext(TodoContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodos = [...todos]
    const index = newTodos.indexOf(todo);
    newTodos.splice(index, 1, inputValue);
    setTodos(newTodos);
    setInputValue("");
    localStorage.setItem("todos2", JSON.stringify(newTodos));
  };
  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h3> Update: {todo}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
      </form>
      {todos.join(", ")}
    </div>
  );
};

export default UpdateTodo;
