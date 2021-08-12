const EditForm = ({ currentTodo, setIsEditing, onEditFormSubmit, onEditInputChange }) => {
  return (  
    <form onSubmit={onEditFormSubmit}>
      <h2>Edit ToDo</h2>
      <label htmlFor="editTodo">Edit Todo: </label>
      <input 
        name="editTodo"
        type="text"
        placeholder="Edit todo"
        value={currentTodo.text}
        onChange={onEditInputChange}
      />
      <button type="submit">Update</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
}
 
export default EditForm;