import updateIcon from "./images/confirm.png";
import cancelIcon from "./images/cancel.png";


const EditForm = ({ currentTodo, setIsEditing, onEditFormSubmit, onEditInputChange }) => {
  return (  
    <form onSubmit={onEditFormSubmit} className="edit-form">
      {/* <h2>Edit ToDo</h2> */}
      <label htmlFor="editTodo">Edit Todo : </label>
      <input 
        name="editTodo"
        type="text"
        placeholder="Edit todo"
        maxLength="24"
        value={currentTodo.text}
        onChange={onEditInputChange}
      />
      <button type="submit" className="update"><img src={updateIcon} alt="update"/></button>
      <button onClick={() => setIsEditing(false)} className="cancel"><img src={cancelIcon} alt="cancel"/></button>
    </form>
  );
}
 
export default EditForm;