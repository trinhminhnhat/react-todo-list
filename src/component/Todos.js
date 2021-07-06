import React, {Fragment, useState, useEffect} from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import axios from 'axios'

const Todos = () => {
    const [todosState, setTodosState] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
                setTodosState(res.data)
            } catch (error) {
                console.log('error: ', error.message);
            }
        }
        getTodos()
    }, [])

    const markComplete = id => {
        const newsTodo = todosState.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })

        setTodosState(newsTodo);
    };

    const delTodo = async id => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            const newsTodo = todosState.filter(todo => todo.id !== id);
            setTodosState(newsTodo);
        } catch (error) {
            console.log('error: ', error.message);
        }
    }

    const addTodo = async title => {
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed: false,
            })
            const newsTodo = [...todosState, res.data];
            setTodosState(newsTodo)
        } catch (error) {
            console.log('error: ', error.message);
        }
    }

    return (
        <Fragment>
            <AddTodo addTodoFunc={addTodo}/>
            <ul className="todo-list">
                {todosState.map(todo => {
                    return <TodoItem key={todo.id} todoPros={todo} markCompleteFunc={markComplete} delTodoFunc={delTodo}></TodoItem>
                })}
            </ul>
        </Fragment>
    );
}

export default Todos;