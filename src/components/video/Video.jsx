import './video.css';
import PropTypes from "prop-types";

function Video({ embedId }) {
    return (
        <iframe
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    )
}
Video.propTypes = {
    embedId: PropTypes.string.isRequired
};
export default Video