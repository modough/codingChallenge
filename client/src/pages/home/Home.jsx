import './home.css';
import PropTypes from 'prop-types';
import HomeSidebar from '../../components/homeSidebar/HomeSidebar';
import HomeBody from '../../components/homeBody/HomeBody';
import LayoutAdmin from '../../components/layoutAdmin/LayoutAdmin';


function Home({ show, toggle, setToggle }) {

    return (
        <LayoutAdmin>
            <section className='home'>
                <HomeSidebar show={show} toggle={toggle} setToggle={setToggle} />
                <HomeBody show={show} toggle={toggle} />
            </section>
        </LayoutAdmin>
    )
}
Home.propTypes = {
    show: PropTypes.bool,
    toggle: PropTypes.bool,
    setToggle: PropTypes.func,
}
export default Home