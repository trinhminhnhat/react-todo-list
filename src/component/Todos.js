import React, {Fragment, useState} from 'react';
import TodoItem from './TodoItem';

const Todos = () => {
    const [todosState, setTodosState] = useState([
        {
            id: 1,
            title: "Work 1",
            completed: true,
        },
        {
            id: 2,
            title: "Work 2",
            completed: false,
        },
        {
            id: 3,
            title: "Work 3",
            completed: false,
        }
    ]);

    const markComplete = id => {
        const newsTodo = todosState.map(todo => {
            if (todo.id == id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })

        setTodosState(newsTodo);
    };

    return (
        <Fragment>
            {todosState.map(todo => {
                return <TodoItem todoPros={todo} markCompleteFunc={markComplete}></TodoItem>
            })}
        </Fragment>
    );
}

export default Todos;