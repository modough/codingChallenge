import './home.css';
import PropTypes from 'prop-types';
import HomeSidebar from '../../components/homeSidebar/HomeSidebar';
import HomeBody from '../../components/homeBody/HomeBody';
import { useState } from 'react';


function Home({ show }) {
    const [toggle, setToggle] = useState(false);
    return (
        <section className='home'>
            <HomeSidebar show={show} toggle={toggle} setToggle={setToggle} />
            <HomeBody show={show} toggle={toggle} />
        </section>
    )
}
Home.propTypes = {
    show: PropTypes.bool,
}
export default Home