import './header.css';
import logo from '../../assets/gear.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import { logout } from '../../features/authSliceReducer';


function Header({ setShow, show }) {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }
    const { token } = useSelector((state) =>
        state.playerReducer
    )
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
                {!token ? <Fragment>
                    <Link to='/login'>
                        <li>S&apos;identifier</li>
                    </Link>
                    <Link to='/register'>
                        <li>S&apos;inscrire</li>
                    </Link>
                </Fragment> :
                    <p className='logout'
                        onClick={handleLogout}>Logout
                    </p>
                }
                {!show ?
                    <RxHamburgerMenu
                        className={token && 'menuBurger'}
                        onClick={() => setShow(!show)}
                    /> :
                    <AiOutlineClose
                        className={token && 'close'}
                        onClick={() => setShow(!show)}
                    />
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