import LanguageLink from '../languageLink/LanguageLink';

import PropTypes from 'prop-types';
import './homeSidebar.css';
function HomeSidebar({ show, toggle, setToggle }) {
    return (
        <section className={`home-sidebar ${toggle ? 'toggle' : ''} ${show ? 'show' : ''}`}>
            <LanguageLink toggle={toggle} setToggle={setToggle} />

        </section>
    )
}
HomeSidebar.propTypes = {
    show: PropTypes.bool,
    setToggle: PropTypes.func,
    toggle: PropTypes.bool
}
export default HomeSidebar