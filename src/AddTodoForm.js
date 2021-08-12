const AddTodoForm = ({ todo, onAddFormSubmit, onAddInputChange }) => {
  return (  
    <form onSubmit={onAddFormSubmit}>
      <h2>Add ToDo</h2>
      <label htmlFor="todo">Add Todo: </label>
      <input 
        name="todo"
        type="text"
        placeholder="Create a new todo"
        value={todo}
        onChange={onAddInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;