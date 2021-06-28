import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
    margin-left: ${({ withMr }) => withMr ? '8px' : '0px'};
`

const Component = ({ label, onClick, withMr }) => (
    <Button onClick={onClick} withMr={withMr}>{label}</Button>
)

Component.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    withMr: PropTypes.bool
}

Component.defaultProps = {
    onClick: null,
    type: '',
    withMr: false
}

export default Component
