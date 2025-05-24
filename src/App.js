import React, { useReducer, useEffect } from 'react';
import { useLocalStorage } from './hooks/Hook';
import { Reducer, ACTIONS } from './reducers/Reducer';
import Form from './conponents/Form';
import List from './conponents/List';
import './style/index.css';

export default function App() {
  const [storedTasks, setStoredTasks] = useLocalStorage('tasks', []);
  const [tasks, dispatch] = useReducer(Reducer, storedTasks);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks, setStoredTasks]);

  return (
    <div className="app-container">
      <h1 className="app-title">What Will Do</h1>
      <Form dispatch={dispatch} />
      <List todos={tasks} dispatch={dispatch} />
    </div>
  );
}


