import { useEffect, useState } from "react";
import "./index.css";


function App() {

  const [todos, setTodos] = useState(() => {
    let savedTodos = localStorage.getItem("todos")
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [todo, setTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(todo !== ""){
      setTodos([ ...todos, { id: todos.length + 1, text: todo.trim() }]);
    }
    setTodo("");
  }

  const handleDeleteClick = (id) => {
    const newTodosList = todos.filter(todo => todo.id !== id);
    setTodos(newTodosList)
  }

  return (
    <div className="App">
      
      <form onSubmit={handleFormSubmit}>
        <input 
          name="todo"
          type="text"
          placeholder="Create a new ToDo"
          value={todo}
          onChange={handleInputChange}
        />
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
