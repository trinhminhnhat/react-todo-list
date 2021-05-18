import React, {Fragment, useState} from 'react';
import TodoItem from './TodoItem';

const Todos = () => {
    const [todosState, setTodosState] = useState([
        {
            title: "Work 1",
            completed: true,
        },
        {
            title: "Work 2",
            completed: false,
        },
        {
            title: "Work 3",
            completed: false,
        }
    ]);
    const allTodos = [];
    for (let todo of todosState) {
        allTodos.push(<p>{todo}</p>);
    }

    return (
        <Fragment>
            {todosState.map(todo => {
                return <TodoItem todoPros={todo}></TodoItem>
            })}
        </Fragment>
    );
}

export default Todos;