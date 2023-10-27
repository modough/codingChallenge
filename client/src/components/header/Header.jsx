import './header.css';
import logo from '../../assets/gear.svg';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';


function Header({ setShow, show }) {
    const { pathname } = useLocation()

    return (
        <section className='header'>
            <Link to='/'>
                <div className='logoDiv'>
                    <h1 className='logoTitle'>C</h1>
                    <img id='gear' src={logo} width={40} alt='logo du site' />
                    <h1 className='logoTitle'>ding Challenge</h1>
                </div>
            </Link>
            <ul className='pagesLink'>
                <Link to='/login'>
                    <li>S&apos;identifier</li>
                </Link>
                <Link to='/register'>
                    <li>S&apos;inscrire</li>
                </Link>
                {!show ?
                    <RxHamburgerMenu className={pathname !== '/' && 'menuBurger'} onClick={() => setShow(!show)} /> :
                    <AiOutlineClose className={pathname !== '/' && 'close'} onClick={() => setShow(!show)} />
                }
            </ul>
        </section >
    )
}
Header.propTypes = {
    setShow: PropTypes.func,
    show: PropTypes.bool,
}
export default Header