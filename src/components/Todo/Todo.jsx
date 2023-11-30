import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [formData, setFormData] = useState({
    name: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateJson(formData);
  };

  //generate Json
  const generateJson = (formData) => {
    const jsonData = JSON.stringify(formData, null, 2);
    console.log(jsonData);
  };

  return (
    <div className="todo">
      <h1>My Todo List</h1>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <label className="name">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label className="status">
              Status
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Add Todo</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todo;