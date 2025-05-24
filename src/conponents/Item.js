import React, { useState } from 'react';
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';
import Button from './button';
import { ACTIONS } from '../reducers/Reducer';

export default function TodoItem({ todo, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleToggle = () =>
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } });

  const handleDelete = () =>
    dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } });

  const handleUpdate = () => {
    if (!newText.trim()) return;
    dispatch({
      type: ACTIONS.UPDATE,
      payload: { id: todo.id, text: newText }
    });
    setIsEditing(false);
  };

  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      {isEditing ? (
        <>
          <input className="edit-input"value={newText}onChange={e => setNewText(e.target.value)}/>
          <Button onClick={handleUpdate} className="btn-update">
            <FaCheck />
          </Button>
        </>
      ) : (
        <>
          <span className="todo-text"onClick={handleToggle}>
            {todo.text}
          </span>
          <div className="icons">
            <FaEdit className="icon edit"onClick={() => { setNewText(todo.text); setIsEditing(true); }} />
            <FaTrash className="icon delete"onClick={handleDelete}/>
          </div>
        </>
      )}
      <small className="date">{todo.date}</small>
    </li>
  );
}
