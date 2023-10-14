import './homeBody.css';
import { cardData } from '../../data/cardData';
import Card from '../card/Card';
import PropTypes from 'prop-types';
function HomeBody({ toggle, show }) {
    return (
        <div className={`home-body ${toggle ? 'toggle' : ''} ${show ? 'show' : ''}`}>
            {cardData.map((data) => (
                <Card key={data.title} img={data.img} text={data.text} title={data.title} />
            ))}
        </div>
    )
}
HomeBody.propTypes = {
    show: PropTypes.bool,
    toggle: PropTypes.bool
}
export default HomeBody