import React from 'react';

const TodoItem = (propName) => {
    console.log('propName: ', propName);

    const todoItemStyle = {
        background: "#f4f4f4",
        padding: '10px',
        borderBottom: "1px solid red",
        textDecoration: propName.todoPros.completed ? "line-through" : "none",
    };

    const deleteButtonStyle = {
        background: "#ff0000",
        color: "#fff",
        padding: '5px',
        border: "none",
        borderRadius: "50%",
        float: "right",
        cursor: "pointer"
    };

    return (
        <p style={todoItemStyle}>
            <input type="checkbox" name="" id="" />
            {propName.todoPros.title}
            <button style={deleteButtonStyle}>Delete</button>
        </p>
    );
}

export default TodoItem;