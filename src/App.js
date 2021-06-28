import { useState } from 'react'

import Form from './components/Form'
import MainWrapper from './components/Layout/MainWrapper'
import Spacer from './components/Spacer'
import Title from './components/Title'
import TodosList from './components/TodosList'


function App() {
    const [todos, setTodos] = useState([])

    const onSubmitForm = (todo) => {
        const newTodos = [
            ...todos,
            {
                content: todo,
                state: 'doing'
            }
        ]

        setTodos(newTodos)
    }

    const onDeleteTodo = (todo) => {
        setTodos(
            todos.filter(t => t.content !== todo.content)
        )
    }

    const onFinishTodo = (updatedTodo) => {
        let newTodos = todos
            .filter(t => t.content !== updatedTodo.content)
  
        newTodos = [
            ...newTodos,
            {
                content: updatedTodo.content,
                state: 'done'
            }
        ]

        setTodos(newTodos)
    }

    return (
        <MainWrapper>
            <Title text="Hypecode" />
            <Form onSubmitForm={onSubmitForm} />
            <Spacer />
            <TodosList
                onDeleteTodo={onDeleteTodo}
                onFinishTodo={onFinishTodo}
                todos={todos}
            />
        </MainWrapper>
    );
}

export default App
