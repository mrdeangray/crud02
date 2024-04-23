import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(["aaa", "bbb", "ccc"]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos2")) || [];
    setTodos(savedTodos);
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
