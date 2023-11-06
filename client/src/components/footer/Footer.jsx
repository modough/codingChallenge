import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../assets/gear.svg';
import appDownloadSvg from '../../assets/app.svg';
import { GrFacebook } from 'react-icons/gr';
import { FaSquareXTwitter, FaYoutube, FaLinkedin, FaTwitch } from 'react-icons/fa6';
import { languageArray } from '../languageLink/LanguageLink';
import PropTypes from 'prop-types';

function Footer({ toggle }) {
    return (
        <section className={`footer ${toggle ? 'toggle' : ''}`}>
            <div className='logo'>
                <Link to='/'>
                    <div className='logoDiv'>
                        <h1 className='logoTitle'>C</h1>
                        <img id='gear' src={logo} width={40} alt='logo du site' />
                        <h1 className='logoTitle'>ding Challenge</h1>
                    </div>
                </Link>
            </div>
            <div className='footer-right'>
                <p>Coding Challenge est une application en ligne pour apprendre les concepts de base de plusieurs langages de programmation. Il contient des cours, des tutos et plusieurs tests avec vérification instantanée.</p>
                <div className='lessons'>
                    {languageArray.map((language) =>
                        <Link key={language.language} to={language.language}>{language.language}</Link>
                    )}
                </div>
                <div className='social'>
                    <div className='appDownloadLinks'>
                        <img className='appLogo' src={appDownloadSvg} alt="" />
                    </div>
                    <div className='socialMedia'>
                        <GrFacebook className='facebook' />
                        <FaSquareXTwitter className='twitter' />
                        <FaYoutube className='youtube' />
                        <FaLinkedin className='linkedin' />
                        <FaTwitch className='twitch' />
                    </div>
                </div>
            </div>
        </section>
    )
}
Footer.propTypes = {
    show: PropTypes.bool,
    toggle: PropTypes.bool,
}
export default Footer