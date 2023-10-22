import { Link } from 'react-router-dom';
import './landing.css';

function Landing() {
    return (
        <section className='landing'>
            <div className='landing-text'>
                <h2 className='blue'>Bienvenue au <strong className='orange'>Coding Challenge</strong></h2>
                <p className='blue'>Avec ces challenges tu sauras à l&apos;aise avec les tests d&apos;entretien</p>
                <h3 className='white'>Suit les cours à ton rythme</h3>
                <p className='white'>Vous pouvez coder. Peu importe votre âge, vos connaissances antérieures ou votre origine. C&lsquo;est comme faire du vélo : il suffit de s&lsquo;entraîner. Et CodeChallenge, le sie de programmation en ligne, est votre vélo avec roues stabilisatrices. Pratiquez le codage sans pression, à votre rythme, dès les premiers cours. lancez-vous !</p>
            </div>
            <Link to='/register'><button type="">N&lsquo;attends plus Inscris-toi</button></Link>
        </section>
    )
}

export default Landing