import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ReadTodos from "./components/ReadTodos";
import UpdateTodo from "./components/UpdateTodo";
import DeleteTodo from "./components/DeleteTodo";
import CreateTodo from "./components/CreateTodo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ReadTodos />} />
        <Route exact path="/create" element={<CreateTodo />} />
        <Route exact path="/update/:todo" element={<UpdateTodo />} />
        <Route exact path="/delete/:todo" element={<DeleteTodo />} />
      </Routes>
    </div>
  );
}

export default App;
