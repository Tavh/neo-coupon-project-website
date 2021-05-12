
import PropTypes from 'prop-types'
import DesktopMenuButton from './buttons/DesktopMenuButton'
const DesktopHeader = ({ title }) => {
    return (
        <div id="desktop_header_wrapper">
            <span>{title}</span>
            <DesktopMenuButton />
        </div>
    )
}

DesktopHeader.defaultProps = {
    title: "<Desktop header>"
}

DesktopHeader.propTypes = {
    title: PropTypes.string
}

export default DesktopHeader
