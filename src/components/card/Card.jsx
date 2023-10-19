import { MdArrowForwardIos } from 'react-icons/md';
import PropTypes from 'prop-types';
import './card.css';


function Card({ img, text, title }) {
    return (
        <div className='home-body-card'>
            <img className='cardImg' src={img} alt='image card' />
            <div className='cardText'>
                <h4>{title}</h4>
                <p>{text}</p>
                <button className='cardBtn'>Accéder<MdArrowForwardIos /></button>
            </div>
        </div>
    )
}
Card.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
}
export default Card