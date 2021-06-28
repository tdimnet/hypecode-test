import PropTypes from 'prop-types'
import styled from 'styled-components'

const H1 = styled.h1`
    color: white;
    text-align: center;
`

const Component = ({ text }) => <H1>{text}</H1>

Component.prototype = {
    text: PropTypes.string.isRequired
}

export default Component
