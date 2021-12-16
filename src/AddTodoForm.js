import addImage from "./images/add.png";

const AddTodoForm = ({ todo, onAddFormSubmit, onAddInputChange }) => {
  return (  
    <form className="input-form" onSubmit={onAddFormSubmit}>
      {/* <h2>Add ToDo</h2> */}
      <label className="label-1" htmlFor="todo">Add Todo : </label>
      <input 
        className="input-1"
        name="todo"
        type="text"
        placeholder="Create a new todo"
        maxLength="24"
        value={todo}
        onChange={onAddInputChange}
      />   
      <button type="submit" className="add-button"><img className="form-img-1" src={addImage} alt="add"/></button>
      <div className="decoration">|</div>
      

      <label className="label-2" htmlFor="todo">Number : </label>
      <input 
        className="input-2"
        name="todo"
        type="number"
        placeholder="phone number"
        maxLength="24"
        value={todo}
        onChange={onAddInputChange}
      />   
      <button type="submit" className="add-button-2"><img className="form-img-2" src={addImage} alt="add"/></button>
      <div className="decoration">|</div>
    </form>
  );
}

export default AddTodoForm;