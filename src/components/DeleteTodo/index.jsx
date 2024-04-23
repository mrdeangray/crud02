import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TodoContext } from "../context/TodoProvider";

const DeleteTodo = () => {
  const navigate = useNavigate();
  const { todo } = useParams();
  const { todos, setTodos } = useContext(TodoContext);

  const handleDelete = () => {
    const newTodos = todos.filter((elem) => elem !== todo);
    setTodos(newTodos);
    localStorage.setItem("todos2", JSON.stringify(newTodos));
    navigate(`/`);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h3> Delete: {todo}</h3>
      <button onClick={handleDelete}>Delete {todo}</button>
    </div>
  );
};

export default DeleteTodo;
