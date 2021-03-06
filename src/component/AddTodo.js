import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddTodo = props => {
    const [title, setTitle] = useState('');

    const changeTitle = (event) => {
        setTitle(event.target.value);
    }

    const addSingleTodo = (event) => {
        event.preventDefault();
        if (title !== "") {
            props.addTodoFunc(title);
            setTitle('');
        }
    }

    return (
        <form className="add-todo-form" onSubmit={addSingleTodo}>
            <input type="text" name="title" className="add-todo-form__input" placeholder="Name" value={title} onChange={changeTitle}/>
            <input type="submit" className="add-todo-form__btn-add btn" value="Add"/>
        </form>
    )
}

AddTodo.propTypes = {
    addTodoFunc: PropTypes.func.isRequired,
}

export default AddTodo;