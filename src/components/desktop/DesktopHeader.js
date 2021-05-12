import PropTypes from 'prop-types'

const DesktopHeader = ({ title }) => {
    return (
        <div id="desktop_header_container">
            <h1>{title}</h1>
        </div>
    );
}

DesktopHeader.defaultProps = {
    title: "<Desktop header>"
}

DesktopHeader.propTypes = {
    title: PropTypes.string
}

export default DesktopHeader
