import addImage from "./images/add.png";

const AddTodoForm = ({ todo, onAddFormSubmit, onAddInputChange }) => {
  return (  
    <form className="input-form" onSubmit={onAddFormSubmit}>
      {/* <h2>Add ToDo</h2> */}
      <label htmlFor="todo">Add Todo : </label>
      <input 
        name="todo"
        type="text"
        placeholder="Create a new todo"
        maxLength="24"
        value={todo}
        onChange={onAddInputChange}
      />   
      <button type="submit" className="add-button"><img src={addImage} alt="add"/></button>
      <div className="decoration">|</div>
    </form>
  );
}

export default AddTodoForm;