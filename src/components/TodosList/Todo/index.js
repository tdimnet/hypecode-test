import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.div`
    background-color: ${({ state }) => state === 'done' ? 'green' : 'initial'};
    margin-bottom: 8px;
    border: 1px solid white;
    padding: 8px 4px;
`

const Component = ({ children, state }) => (
    <Wrapper state={state}>{children}</Wrapper>
)

Component.propTypes = {
    children: PropTypes.node.isRequired,
    state: PropTypes.string
}

Component.defaultProps = {
    state: ''
}

export default Component
