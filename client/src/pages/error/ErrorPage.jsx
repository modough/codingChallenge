import { Link, } from 'react-router-dom';
import './errorPage.css';

function ErrorPage() {

    return (
        <section className='errorPage'>
            <h1>{'404'}</h1>
            <p className="error-message">Oups! La page que vous demandez n&apos;existe pas.</p>
            <p className="homepage">
                <Link to='/'>Retourner sur la page d&apos;accueil</Link>
            </p>

        </section>
    )
}

export default ErrorPage