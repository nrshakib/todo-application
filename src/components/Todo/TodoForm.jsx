import { useState } from "react";
import "./TodoForm.css";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [todoName, setTodoName] = useState("");
  const [todoStatus, setTodoStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoName.trim() === "") {
      return;
    }

    const newTodo = {
      id: uuidv4(),
      name: todoName,
      status: todoStatus,
    };

    addTodo(newTodo);

    setTodoName("");
    setTodoStatus("");
  };

  const handleNameOnChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleStatusOnChange = (e) => {
    setTodoStatus(e.target.value);
  };

  return (
    <div className="todo">
      <h1>My Todo List</h1>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label className="name">Name :</label>
            <input
              className="name-input"
              type="text"
              name="name"
              value={todoName}
              onChange={handleNameOnChange}
            />
          </div>
          <div>
            <label className="status">Status :</label>
            <input
              className="status-input"
              type="text"
              name="status"
              value={todoStatus}
              onChange={handleStatusOnChange}
            />
          </div>
          <button type="submit" className="submitButton">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
