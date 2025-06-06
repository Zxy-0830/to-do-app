import React, { useState } from 'react';
import Button from './button';
import { ACTIONS } from '../reducers/Reducer';

export default function TodoForm({ dispatch }) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: ACTIONS.ADD, payload: { text } });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input type="text" className= "todo-input" value= {text} onChange= {e => setText(e.target.value)}placeholder="What will be done"/>
      <Button type="submit" className="btn-add">
        Add
      </Button>
    </form>
  );
}

