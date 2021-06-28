import styled from 'styled-components'
import PropTypes from 'prop-types'

const Label = styled.label`
    height: 1px;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: -10000px;
    width: 1px;
`

const Component = ({ text, htmlFor }) => (
    <Label htmlFor={htmlFor}>{text}</Label>
)

Component.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Component
