import React from "react";
import { Link } from "react-router-dom";

const Todo = ({ todo }) => {
  return (
    <div>
      <span>{todo}</span>
      <Link to={`/update/${todo}`}>update</Link>
      <Link to={`/delete/${todo}`}>delete</Link>
    </div>
  );
};

export default Todo;
