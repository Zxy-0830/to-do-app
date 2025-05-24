import React, { useState } from 'react';
import { FaCheckCircle, FaEdit, FaTrash } from 'react-icons/fa';
import Button from './button';
import { ACTIONS } from '../reducers/Reducer';

export default function TodoItem({ todo, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText]     = useState(todo.text);

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
          <input className="edit-input" value={newText} onChange={e => setNewText(e.target.value)}/>
          <Button onClick={handleUpdate} className="btn-update">
            <FaCheckCircle />
          </Button>
        </>
      ) : (
        <>
          <span className="todo-text">{todo.text}</span>
          <small className="date">{todo.date}</small>
          <div className="icons">
            <FaCheckCircle className="icon complete" onClick={handleToggle}/>
            <FaEdit className="icon edit" onClick={() => { setNewText(todo.text); setIsEditing(true); }}/>
            <FaTrash className="icon delete" onClick={handleDelete} />
          </div>
        </>
      )}
    </li>
  );
}

