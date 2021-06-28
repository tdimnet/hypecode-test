import PropTypes from 'prop-types'
import styled from 'styled-components'

import Todo from './Todo'
import Button from '../Button'

const Wrapper = styled.div``

const Component = ({ todos, onDeleteTodo, onFinishTodo }) => (
    <Wrapper>
        {
            todos 
            ? todos.map((todo, index) => (
                    <Todo state={todo.state} key={`${todo}-${index}`}>
                        {todo.content}
                        <Button 
                            onClick={() => onFinishTodo(todo)} label="complete"
                            withMr
                        />
                        <Button 
                            onClick={() => onDeleteTodo(todo)} label="delete" 
                            withMr
                        />
                    </Todo>
                )
            ) 
            : null
        }
    </Wrapper>
)

Component.propTypes = {
    onDeleteTodo: PropTypes.func.isRequired,
    onFinishTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
}

export default Component
