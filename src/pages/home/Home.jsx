
import { useState } from 'react';
import LanguageLink from '../../components/languageLink/LanguageLink';
import './home.css';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import jsImg from '../../assets/js.webp'
import pythonImg from '../../assets/python.jpg';

function Home({ show }) {
    const [toggle, setToggle] = useState(false);

    return (
        <section className='home'>
            <div className={`home-sidebar ${toggle ? 'toggle' : ''} ${show ? 'show' : ''}`}>
                <LanguageLink toggle={toggle} />
                <div className='line'></div>
                <div className='languageLink-toggle' onClick={() => setToggle(!toggle)}>
                    {!toggle ? <MdArrowBackIosNew /> : <MdArrowForwardIos />}
                </div>
                <Link to='/login' className='loginLink'>
                    <li>Identifier-vous !</li>
                </Link>
            </div>
            <div className={`home-body ${toggle ? 'toggle' : ''} ${show ? 'show' : ''}`}>
                <div className='home-body-card'>
                    <img className='cardImg' src={jsImg} alt='' />
                    <div className='cardText'>
                        <h4>Cours en JavaScript</h4>
                        <p>Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !</p>
                        <button className='cardBtn'>Accéder<MdArrowForwardIos /></button>
                    </div>
                </div>
                <div className='home-body-card'>
                    <img className='cardImg' src={pythonImg} alt='' />
                    <div className='cardText'>
                        <h4>Cours en Python</h4>
                        <p>Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !</p>
                        <button className='cardBtn'>Accéder<MdArrowForwardIos /></button>
                    </div>
                </div>
                <div className='home-body-card'>
                    <img className='cardImg' src={jsImg} alt='' />
                    <div className='cardText'>
                        <h4>Cours en JavaScript</h4>
                        <p>Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !</p>
                        <span>N&lsquo;attends plus Inscris-toi</span>
                    </div>
                </div>
                <div className='home-body-card'>
                    <img className='cardImg' src={jsImg} alt='' />
                    <div className='cardText'>
                        <h4>Cours en JavaScript</h4>
                        <p>Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !</p>
                        <span>N&lsquo;attends plus Inscris-toi</span>
                    </div>
                </div>

            </div>
        </section>
    )
}
Home.propTypes = {
    show: PropTypes.bool,
}
export default Home