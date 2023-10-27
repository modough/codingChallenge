import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/home')
    };
    return (
        <section className='login'>
            <form>
                <div className="pseudo" >
                    <label>Pseudo</label>
                    <input type="text" placeholder="Entrez votre pseudo" />
                </div>
                <div className="password" >
                    <label>Mot de passe</label>
                    <input type="password" placeholder="Entrez votre mot de passe" />
                </div>
                <button type="submit" onClick={handleSubmit}>
                    Valider
                </button>
                <div>
                    <Link to='/register'>
                        <p>Pas de compte ? Inscrivez-vous</p>
                    </Link>
                    <Link to='/'>
                        <p>Récuperer votre mot de passe.</p>
                    </Link>
                </div>
            </form>
        </section>
    )
}

export default Login