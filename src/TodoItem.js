import editIcon from "./images/pencil.png";
import deleteIcon from "./images/trash.png";


const TodoItem = ({ todo, onEditClick, onDeleteClick }) => {
  return (
    <div className="todo-item-wrapper">
      <li className="todo-preview" key={todo.id}>
        <div className="li-text">{todo.text}</div>
        <div className="decoration-2">|</div>
        <button className="edit-button" onClick={() => onEditClick(todo)}><img src={editIcon} alt="add"/></button>
        <button className="delete-button" onClick={() => onDeleteClick(todo.id)}><img src={deleteIcon} alt="add"/></button>
      </li>
    </div> 
  );
}
 
export default TodoItem;