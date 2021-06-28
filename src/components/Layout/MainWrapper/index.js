import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: tomato;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
    max-width: 900px;
    padding: 8px 4px;
    width: 90%;
`

const Component = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

Component.propTypes = {
    children: PropTypes.node.isRequired
}

export default Component
