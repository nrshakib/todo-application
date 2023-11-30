import './TodoList.css'
const TodoList = ({ todos }) => {
    
  return (
    <ul>
          {todos.map((todo) => {
          // console.log(todo);
       return <li className="list" key={todo.id}>
          {todo.name} - {todo.status}
        </li>;
      })}
    </ul>
  );
};

export default TodoList;
