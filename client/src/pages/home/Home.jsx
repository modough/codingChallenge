import './home.css';
import PropTypes from 'prop-types';
import HomeSidebar from '../../components/homeSidebar/HomeSidebar';
import HomeBody from '../../components/homeBody/HomeBody';


function Home({ show, toggle, setToggle }) {

    return (
        <section className='home'>
            <HomeSidebar show={show} toggle={toggle} setToggle={setToggle} />
            <HomeBody show={show} toggle={toggle} />
        </section>
    )
}
Home.propTypes = {
    show: PropTypes.bool,
    toggle: PropTypes.bool,
    setToggle: PropTypes.func,
}
export default Home