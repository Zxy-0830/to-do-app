import React from 'react';
import TodoItem from './Item';

function TodoList({ todos, dispatch }) {
    if (todos.length === 0) {
        return <p className="empty">Your tasks will be here.</p>;
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
            ))}
        </ul>
    );
}

export default TodoList;
