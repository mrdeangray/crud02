import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import Todo from "../Todo";
import { Link } from "react-router-dom";

const ReadTodos = () => {
  const { todos, setTodos } = useContext(TodoContext);
  console.log(todos);
  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => {
        return <Todo key={todo} todo={todo} />;
      })}
      <Link to={`/create`}>
        <button>Create Todo</button>
      </Link>
    </div>
  );
};

export default ReadTodos;
