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
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  }
  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(todo !== ""){
      setTodos([ ...todos, { id: todos.length + 1, text: todo.trim() }]);
    }
    setTodo("");
  }
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  const handleDeleteClick = (id) => {
    const newTodosList = todos.filter(todo => todo.id !== id);
    setTodos(newTodosList);
  }
  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map( (todo) => todo.id === id ? updatedTodo : todo );
    setIsEditing(false);
    setTodos(updatedItem);
  }
  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo })
  }

  return (
    <div className="App">
      { isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <h2>Edit ToDo</h2>
          <label htmlFor="editTodo">Edit Todo: </label>
          <input 
            name="editTodo"
            type="text"
            placeholder="Edit todo"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
          <button type="submit">Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <h2>Add ToDo</h2>
          <label htmlFor="todo">Add Todo: </label>
          <input 
            name="todo"
            type="text"
            placeholder="Create a new todo"
            value={todo}
            onChange={handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEditClick(todo)}>Edit</button>
            <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
