import React, {Fragment, useState} from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from 'uuid'

const Todos = () => {
    const [todosState, setTodosState] = useState([
        {
            id: uuidv4(),
            title: "Work 1",
            completed: true,
        },
        {
            id: uuidv4(),
            title: "Work 2",
            completed: false,
        },
        {
            id: uuidv4(),
            title: "Work 3",
            completed: false,
        }
    ]);

    const markComplete = id => {
        const newsTodo = todosState.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })

        setTodosState(newsTodo);
    };

    const delTodo = id => {
        const newsTodo = todosState.filter(todo => todo.id != id);
        setTodosState(newsTodo);
    }

    const addTodo = title => {
        const newsTodo = [...todosState, {
            id: uuidv4(),
            title,
            completed: false,
        }];
        setTodosState(newsTodo);
    }

    return (
        <Fragment>
            <AddTodo addTodoFunc={addTodo}/>
            {todosState.map(todo => {
                return <TodoItem key={todo.id} todoPros={todo} markCompleteFunc={markComplete} delTodoFunc={delTodo}></TodoItem>
            })}
        </Fragment>
    );
}

export default Todos;