import styled from 'styled-components'
import PropTypes from 'prop-types'

const Input = styled.input`
    margin-right: 8px;
`

const Component = ({ 
    id,
    name,
    onChangeTodo,
    placeholder,
    required,
    todo,
    type
 }) => (
    <Input
       id={id}
       name={name}
       onChange={e => onChangeTodo(e.target.value)}
       placeholder={placeholder}
       required={required}
       type={type}
       value={todo}
    />
)

Component.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChangeTodo: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    todo: PropTypes.string.isRequired,
    type: PropTypes.string
}

Component.defaultProps = {
    required: false,
    type: 'text'
}

export default Component
