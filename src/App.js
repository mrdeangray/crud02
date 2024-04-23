import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ReadTodos from "./components/ReadTodos";
import UpdateTodo from "./components/UpdateTodo";
import DeleteTodo from "./components/DeleteTodo";
import CreateTodo from "./components/CreateTodo";
import TodoProvider from "./components/context/TodoProvider";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Routes>
          <Route exact path="/" element={<ReadTodos />} />
          <Route exact path="/create" element={<CreateTodo />} />
          <Route exact path="/update/:todo" element={<UpdateTodo />} />
          <Route exact path="/delete/:todo" element={<DeleteTodo />} />
        </Routes>
      </TodoProvider>
    </div>
  );
}

export default App;
