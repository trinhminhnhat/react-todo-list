import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (propName) => {
    const delTodoFunc = propName.delTodoFunc;
    const todoItemStyle = {
        textDecoration: propName.todoPros.completed ? "line-through" : "none",
    };

    return (
        <li className="todo-list__item">
            <div className="todo-list__group">
                <input type="checkbox" className="todo-list__item-checkbox" id={"todo-" + propName.todoPros.id} onChange={propName.markCompleteFunc.bind(this, propName.todoPros.id)} checked={propName.todoPros.completed}/>
                <label htmlFor={"todo-" + propName.todoPros.id} style={todoItemStyle}>{propName.todoPros.title}</label>
            </div>
            <button onClick={delTodoFunc.bind(this, propName.todoPros.id)} className="todo-list__btn-delete btn">Delete</button>
        </li>
    );
}

// PropTypes
TodoItem.propTypes = {
    todoPros: PropTypes.object.isRequired,
    markCompleteFunc: PropTypes.func.isRequired,
    delTodoFunc: PropTypes.func.isRequired
}

export default TodoItem;