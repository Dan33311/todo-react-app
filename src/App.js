import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import EditForm from "./EditForm";
import "./index.css";

function App() {

  const [todos, setTodos] = useState([
      { "id": "2021-08-13T01:18:00.241Z", "text": "Default todo (sample)" },
      { "id": "2021-08-13T01:18:01.241Z", "text": "...try to add your own todo" }
    ], () => {
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
      setTodos([ ...todos, { id: new Date(), text: todo.trim() }]);
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
      <Navbar />
      <p className="greeting">Welcome, <br />let's Do the best !</p>
      { isEditing ? (
        <EditForm 
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditFormSubmit={handleEditFormSubmit}
          onEditInputChange={handleEditInputChange}
        />
      ) : (
        <>
          <AddTodoForm 
            todo={todo}
            onAddFormSubmit={handleFormSubmit}
            onAddInputChange={handleInputChange}
          />
          <h2 className="todo-list-title">Todo List : </h2>
          <ul className="todo-list">
            {todos.map((todo) => (
              <TodoItem 
                todo={todo}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
              />
            ))}
          </ul>
        </>
      )}
      <footer>
        <p>Go to</p>
        <a href="/">Daniel Sandoval Portfolio</a>
      </footer>

    </div>
  );
}

export default App;
