import './video.css';
import PropTypes from "prop-types";

function Video({ embedId, title, description }) {
    return (
        <div className='video'>
            <iframe
                src={`https://www.youtube.com/embed/${embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
            <div className='videoText'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}
Video.propTypes = {
    embedId: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
};
export default Video