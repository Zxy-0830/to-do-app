// Action type constants
export const ACTIONS = {
  ADD: 'add',
  DELETE: 'delete',
  TOGGLE: 'toggle',
  UPDATE: 'update',
};

// Reducer function to handle task operations
export function Reducer(tasks, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [
        ...tasks,
        {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
          date: new Date().toLocaleString(),
        },
      ];

    case ACTIONS.DELETE:
      return tasks.filter(task => task.id !== action.payload.id);

    case ACTIONS.TOGGLE:
      return tasks.map(task =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );

    case ACTIONS.UPDATE:
      return tasks.map(task =>
        task.id === action.payload.id
          ? {
              ...task,
              text: action.payload.text,
              date: new Date().toLocaleString(),
            }
          : task
      );

    default:
      return tasks;
  }
}

