import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../Button'
import Input from '../Input'
import Label from '../Label'

const Wrapper = styled.form``


const Component = ({ onSubmitForm }) => {
    const [todo, setTodo] = useState('')

    const onChangeTodo = content => setTodo(content)
 
    const onSubmit = (e) => {
        e.preventDefault()

        onSubmitForm(todo)
        setTodo('')
    }

    return (
        <Wrapper onSubmit={onSubmit}>
            <Label htmlFor="todo" text="To do task" />
            <Input
                id="todo"
                name="todo"
                onChangeTodo={onChangeTodo}
                placeholder="Get Hired"
                required={true}
                todo={todo}
            />
            <Button label="Add ToDo" />
        </Wrapper>
    )
}

Component.propTypes = {
    onSubmitForm: PropTypes.func.isRequired
}

export default Component
