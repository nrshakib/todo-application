import { useEffect, useState } from "react";
import "./Todos.css";
import TodoForm from "../Todo/TodoForm";
import TodoList from "../TodoList/TodoList";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  //Save todos to localStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //Fetch data from localstorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const filterTodos = () => {
    switch (filter) {
      case "complete":
        return todos.filter((todo) => todo.status === "complete");
      case "active":
        return todos.filter((todo) => todo.status === "active");
      default:
        return todos;
    }
  };

  return (
    <div className="status-button">
      <TodoForm addTodo={addTodo} />
      <div>
        <button onClick={() => setFilter("all")} className="allButton">
          All
        </button>
        <button onClick={() => setFilter("active")} className="activeButton">
          Active
        </button>
        <button
          onClick={() => setFilter("complete")}
          className="completeButton"
        >
          Complete
        </button>
      </div>
      <TodoList todos={filterTodos()} />
    </div>
  );
};

export default Todos;
