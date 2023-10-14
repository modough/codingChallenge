import LanguageLink from '../languageLink/LanguageLink';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './homeSidebar.css';
function HomeSidebar({ show, toggle, setToggle }) {
    return (
        <section className={`home-sidebar ${toggle ? 'toggle' : ''} ${show ? 'show' : ''}`}>
            <LanguageLink toggle={toggle} />
            <div className='languageLink-toggle' onClick={() => setToggle(!toggle)}>
                {!toggle ? <MdArrowBackIosNew /> : <MdArrowForwardIos />}
            </div>
            <Link to='/login' className='loginLink'>
                <li>Identifier-vous !</li>
            </Link>
        </section>
    )
}
HomeSidebar.propTypes = {
    show: PropTypes.bool,
    setToggle: PropTypes.func,
    toggle: PropTypes.bool
}
export default HomeSidebar